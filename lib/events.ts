import {
  getDataBase,
  getAllRelatedKeys,
  joinRelatedTable,
  DbRecord,
  RelatedRecord,
  MappedRecords
} from './db';
import { EventType, TalkType } from '../interfaces';
import { getTalksListByKeys } from './talks';

const base = getDataBase();
const baseTable = base('Events');

/**
 * Related tables definition
 */
const RELATED_TALKS = 'Talks';

interface EventFields extends DbRecord {
  fields: {
    Id: number;
    Title: string;
    Description: string;
    'EventType Date': string;
    Status: string;
    Location: string;
    Address: string;
    Summary: string;
    [RELATED_TALKS]?: string[];
  };
}

type RelatedStorageType = {
  [RELATED_TALKS]: RelatedRecord<TalkType>;
};

/**
 * Get mapped EventType rows including linked records from other tables
 *
 * @param records
 */
const getMappedRecords = async function (records: readonly EventFields[]): Promise<EventType[]> {
  const relatedTables = [RELATED_TALKS];
  const relatedKeys = getAllRelatedKeys(relatedTables, records);
  const relatedStorage: RelatedStorageType = {
    [RELATED_TALKS]: await getTalksListByKeys(relatedKeys[RELATED_TALKS])
  };

  return records.map((record: EventFields) => mapRecord(record, relatedStorage));
};

/**
 * Map record as EventType
 *
 * @param record
 * @param relatedStorage
 */
const mapRecord = function (record: EventFields, relatedStorage: RelatedStorageType): EventType {
  const { id, fields } = record;

  return {
    id: id,
    Id: fields['Id'],
    title: fields['Title'] ?? '',
    description: fields['Description'] ?? '',
    event_date: fields['EventType Date'] ?? '',
    location: fields['Location'] ?? '',
    address: fields['Address'] ?? '',
    summary: fields['Summary'] ?? '',
    status: fields['Status'] ?? '',
    talks: fields.hasOwnProperty(RELATED_TALKS)
      ? joinTalks(fields[RELATED_TALKS], relatedStorage[RELATED_TALKS])
      : []
  } as EventType;
};

/**
 * Join data from related Talks table
 *
 * @param keys
 * @param storage
 */
const joinTalks = function (keys: string[], storage: RelatedRecord<TalkType>): TalkType[] {
  if (!keys || !storage) {
    return [];
  }

  return joinRelatedTable(keys, storage) as TalkType[];
};

/**
 * Fetch data from base table using filter
 *
 * @param whereFilter object
 */
async function fetchBaseTable(whereFilter: object) {
  const records: readonly EventFields[] = (await baseTable
    .select(whereFilter)
    .all()) as EventFields[];

  if (!records) {
    return [];
  }

  const mappedRecords: EventType[] = await getMappedRecords(records);

  return mappedRecords ?? [];
}

/**
 * Get list of Events ordered by `EventType Date`
 *
 * @param limit number
 */
export async function getEventList(limit: number) {
  const whereFilter = {
    maxRecords: limit,
    sort: [
      {
        field: 'EventType Date',
        direction: 'desc'
      }
    ]
  };

  const records = await fetchBaseTable(whereFilter);

  return records ?? [];
}

/**
 * Get list of Upcoming Events ordered by `EventType Date`
 *
 * @param limit number
 */
export async function getUpcomingEventList(limit: number) {
  const whereFilter = {
    filterByFormula: '({EventType Date} >= NOW())',
    maxRecords: limit,
    sort: [
      {
        field: 'EventType Date',
        direction: 'desc'
      }
    ]
  };

  const records = await fetchBaseTable(whereFilter);

  return records ?? [];
}

/**
 * Get EventType by `id`
 *
 * @param id
 */
export async function getEvent(id: number) {
  const whereFilter = {
    filterByFormula: `({Id} = ${id})`,
    maxRecords: 1
  };
  const records = await fetchBaseTable(whereFilter);

  return records && records[0] ? records[0] : {};
}

/**
 * Get list of Past Events ordered by `EventType Date`
 *
 * @param limit number
 */
export async function getPastEventList(limit: number) {
  const whereFilter = {
    filterByFormula: '({EventType Date} <= NOW())',
    maxRecords: limit,
    sort: [
      {
        field: 'EventType Date',
        direction: 'desc'
      }
    ]
  };

  const records = await fetchBaseTable(whereFilter);

  return records ?? [];
}
