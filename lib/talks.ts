import getDataBase, {getRelatedRecordsByKeys, getAllRelatedKeys, joinRelatedTable, RecordType} from './db';
import {AuthorType, TalkType} from '../interfaces';
import {getAuthorsListByKeys} from './authors';

const base = getDataBase();
const baseTable = base('Talks');

/**
 * Related tables definition
 */
const RELATED_AUTHORS = 'Authors';

type RelatedStorageType = {
  [RELATED_AUTHORS]: any
}

/**
 * Get mapped Talk rows including linked records from other tables
 *
 * @param records
 */
const getMappedRecords = async function (records: RecordType[]) {
  const relatedTables = [
    RELATED_AUTHORS
  ];
  const relatedKeys = getAllRelatedKeys(relatedTables, records);
  const relatedStorage: RelatedStorageType = {
    [RELATED_AUTHORS]: await getAuthorsListByKeys(relatedKeys[RELATED_AUTHORS])
  };

  return records.map((record: RecordType) =>
    mapRecord(record, relatedStorage)
  );
};

/**
 * Map record as Talk
 * 
 * @param record
 * @param relatedStorage
 */
const mapRecord = function (record: RecordType, relatedStorage: RelatedStorageType): TalkType {
  const {id, fields} = record;

  return {
    id: id,
    Id: fields['Id'],
    title: fields['Title'] ?? '',
    description: fields['Description'] ?? '',
    talk_date: fields['Talk Date'] ?? '',
    language: fields['Language'] ?? '',
    tags: fields['Tags'] ?? [],
    status: fields['Status'] ?? '',
    location: fields['Priority'] ?? '',
    authors: (fields[RELATED_AUTHORS] ? joinAuthors(fields[RELATED_AUTHORS], relatedStorage[RELATED_AUTHORS]) : [])
  };
};

/**
 * Join data from related Authors table
 *
 * @param keys
 * @param relatedStorage
 */
const joinAuthors = function (keys: string[], relatedStorage: RelatedStorageType): AuthorType[] {
  if (!keys || !relatedStorage) {
    return [];
  }

  return joinRelatedTable(keys, relatedStorage);
};

/**
 * Get Talk object by `id`
 *
 * @param id
 */
export async function getTalk(id: number) {
  const whereFilter = {
    filterByFormula: `({Id} = ${id})`,
    maxRecords: 1
  };
  const records: RecordType[]  = await baseTable.select(whereFilter).all();

  if (!records) {
    return {};
  }

  const mappedRow: TalkType[] = await getMappedRecords(records);

  return mappedRow ? mappedRow[0] : {};
}

/**
 * Get all Talks objects from `Talks` table by keys
 *
 * @param keys
 * @param limit
 */
export async function getTalksListByKeys(keys: string[], limit?: number) {
  return await getRelatedRecordsByKeys(baseTable, getMappedRecords, keys, limit);
}
