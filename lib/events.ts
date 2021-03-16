import {
  getDataBase,
  getAllRelatedKeys,
  joinRelatedTable,
  DbRecord,
  RelatedRecord,
  MappedRecords
} from './db';
import { EventEntity, TalkEntity } from '../interfaces';
import { getTalksListByKeys } from './talks';

const base = getDataBase();
const baseTable = base('Events');

/**
 * Related tables definition
 */
const RELATED_TALKS = 'Talks';

interface EventRecord extends DbRecord {
  fields: {
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
  [RELATED_TALKS]: RelatedRecord<TalkEntity>;
};

/**
 * Get mapped EventEntity rows including linked records from other tables
 *
 * @param records
 */
const getMappedRecords: MappedRecords<EventRecord, EventEntity> = async function (records: readonly EventRecord[]): Promise<EventEntity[]> {
  const relatedTables = [RELATED_TALKS];
  const relatedKeys = getAllRelatedKeys(relatedTables, records);
  const relatedStorage: RelatedStorageType = {
    [RELATED_TALKS]: await getTalksListByKeys(relatedKeys[RELATED_TALKS])
  };

  return records.map((record: EventRecord) => mapRecord(record, relatedStorage));
};

/**
 * Map record as EventEntity
 *
 * @param record
 * @param relatedStorage
 */
const mapRecord = function (record: EventRecord, relatedStorage: RelatedStorageType): EventEntity {
  const { id, fields } = record;

  return {
    id: id,
    title: fields['Title'] ?? '',
    description: fields['Description'] ?? '',
    event_date: fields['EventType Date'] ?? '',
    location: fields['Location'] ?? '',
    address: fields['Address'] ?? '',
    summary: fields['Summary'] ?? '',
    status: fields['Status'] ?? '',
    talks: fields[RELATED_TALKS]
      ? joinTalks(fields[RELATED_TALKS], relatedStorage[RELATED_TALKS])
      : []
  } as EventEntity;
};

/**
 * Join data from related Talks table
 *
 * @param keys
 * @param storage
 */
const joinTalks = function (keys: string[] | undefined, storage: RelatedRecord<TalkEntity>): TalkEntity[] {
  if (!keys || !storage) {
    return [];
  }

  return joinRelatedTable(keys, storage) as TalkEntity[];
};

/**
 * Fetch data from base table using filter
 *
 * @param whereFilter object
 */
async function fetchBaseTable(whereFilter: object) {
  const records: readonly EventRecord[] = (await baseTable
    .select(whereFilter)
    .all()) as EventRecord[];

  if (!records) {
    return [];
  }

  const mappedRecords: EventEntity[] = await getMappedRecords(records);

  return mappedRecords ?? [];
}

/**
 * Get list of Events ordered by `EventEntity Date`
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
 * Get list of Upcoming Events ordered by `EventEntity Date`
 *
 * @param limit number
 */
export async function getUpcomingEventList(limit: number) {
  const whereFilter = {
    filterByFormula: '({EventEntity Date} >= NOW())',
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
 * Get EventEntity by `id`
 *
 * @param id
 */
export async function getEvent(id: string) {
  const whereFilter = {
    filterByFormula: `(RECORD_ID() = ${id})`,
    maxRecords: 1
  };
  const records = await fetchBaseTable(whereFilter);

  return records && records[0] ? records[0] : {};
}

/**
 * Get list of Past Events ordered by `EventEntity Date`
 *
 * @param limit number
 */
export async function getPastEventList(limit: number) {
  const whereFilter = {
    filterByFormula: '({EventEntity Date} <= NOW())',
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
