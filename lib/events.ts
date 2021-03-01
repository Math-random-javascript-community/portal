import getDataBase, {getAllRelatedKeys, joinRelatedTable, RecordType} from './db';
import {EventType, TalkType} from '../interfaces';
import {getTalksListByKeys} from './talks';

const base = getDataBase();
const baseTable = base('Events');

/**
 * Related tables definition
 */
const RELATED_TALKS = 'Talks';

type RelatedStorageType = {
  [RELATED_TALKS]: any
}

/**
 * Get mapped Event rows including linked records from other tables
 *
 * @param records
 */
const getMappedRecords = async function (records: readonly RecordType[]) {
  const relatedTables = [
    RELATED_TALKS
  ];
  const relatedKeys = getAllRelatedKeys(relatedTables, records);
  const relatedStorage: RelatedStorageType = {
    [RELATED_TALKS]: await getTalksListByKeys(relatedKeys[RELATED_TALKS])
  };

  return records.map((record: RecordType) =>
    mapRecord(record, relatedStorage)
  );
};

/**
 * Map record as Event
 * 
 * @param record
 * @param relatedStorage
 */
const mapRecord = function (record: RecordType, relatedStorage: RelatedStorageType): EventType {
  const {id, fields} = record;

  return {
    id: id,
    Id: fields['Id'],
    title: fields['Title'] ?? '',
    description: fields['Description'] ?? '',
    event_date: fields['Event Date'] ?? '',
    location: fields['Location'] ?? '',
    address: fields['Address'] ?? '',
    summary: fields['Summary'] ?? '',
    status: fields['Status'] ?? '',
    talks: (fields[RELATED_TALKS] ? joinTalks(fields[RELATED_TALKS], relatedStorage[RELATED_TALKS]) : [])
  };
};

/**
 * Join data from related Talks table
 *
 * @param keys
 * @param relatedStorage
 */
const joinTalks = function (keys: string[], relatedStorage: RelatedStorageType): TalkType[] {
  if (!keys || !relatedStorage) {
    return [];
  }

  return joinRelatedTable(keys, relatedStorage);
};

/**
 * Fetch data from base table using filter
 *
 * @param whereFilter object
 */
async function fetchBaseTable(whereFilter: object) {
  const records: readonly RecordType[] = await baseTable.select(whereFilter).all();

  if (!records) {
    return [];
  }

  const mappedRecords: EventType[] = await getMappedRecords(records);

  return mappedRecords ?? [];
}

/**
 * Get list of Events ordered by `Event Date`
 *
 * @param limit number
 */
export async function getEventList(limit: number) {
  const whereFilter = {
    maxRecords: limit,
    sort: [
      {
        field: 'Event Date',
        direction: 'desc'
      }
    ]
  };

  const records = await fetchBaseTable(whereFilter);

  return records ?? [];
}

/**
 * Get list of Upcoming Events ordered by `Event Date`
 *
 * @param limit number
 */
export async function getUpcomingEventList(limit: number) {
  const whereFilter = {
    filterByFormula: '({Event Date} >= NOW())',
    maxRecords: limit,
    sort: [
      {
        field: 'Event Date',
        direction: 'desc'
      }
    ]
  };

  const records = await fetchBaseTable(whereFilter);

  return records ?? [];
}

/**
 * Get Event by `id`
 *
 * @param id
 */
export async function getEvent(id: number) {
  const whereFilter = {
    filterByFormula: `({Id} = ${id})`,
    maxRecords: 1
  };
  const records = await fetchBaseTable(whereFilter);

  return (records && records[0]) ? records[0] : {};
}

/**
 * Get list of Past Events ordered by `Event Date`
 *
 * @param limit number
 */
export async function getPastEventList(limit: number) {
  const whereFilter = {
    filterByFormula: '({Event Date} <= NOW())',
    maxRecords: limit,
    sort: [
      {
        field: 'Event Date',
        direction: 'desc'
      }
    ]
  };

  const records = await fetchBaseTable(whereFilter);

  return records ?? [];
}
