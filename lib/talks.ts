import {
  getDataBase,
  getRelatedRecordsByKeys,
  getAllRelatedKeys,
  joinRelatedTable,
  DbRecord,
  MappedRecords,
  RelatedRecord
} from './db';
import { AuthorType, TalkType } from '../interfaces';
import { getAuthorsListByKeys } from './authors';

const base = getDataBase();
const baseTable = base('Talks');

/**
 * Related tables definition
 */
const RELATED_AUTHORS = 'Authors';

interface TalkFields extends DbRecord {
  fields: {
    Id: number;
    Title: string;
    Description: string;
    'Talk Date': string;
    Language: string;
    Tags: string[];
    Status: string;
    Priority: string;
    [RELATED_AUTHORS]?: string[];
  };
}

type RelatedStorageType = {
  [RELATED_AUTHORS]: RelatedRecord<AuthorType>;
};

/**
 * Get mapped Talk rows including linked records from other tables
 *
 * @param records
 */
const getMappedRecords: MappedRecords<TalkFields, TalkType> = async function (
  records: readonly TalkFields[]
): Promise<TalkType[]> {
  const relatedTables = [RELATED_AUTHORS];
  const relatedKeys = getAllRelatedKeys(relatedTables, records);
  const relatedStorage: RelatedStorageType = {
    [RELATED_AUTHORS]: await getAuthorsListByKeys(relatedKeys[RELATED_AUTHORS])
  };

  return records.map((record: TalkFields) => mapRecord(record, relatedStorage));
};

/**
 * Map record as Talk
 *
 * @param record
 * @param relatedStorage
 */
const mapRecord = function (record: TalkFields, relatedStorage: RelatedStorageType): TalkType {
  const { id, fields } = record;

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
    authors: fields.hasOwnProperty(RELATED_AUTHORS)
      ? joinAuthors(fields[RELATED_AUTHORS], relatedStorage[RELATED_AUTHORS])
      : []
  } as TalkType;
};

/**
 * Join data from related Authors table
 *
 * @param keys
 * @param storage
 */
const joinAuthors = function (keys: string[], storage: RelatedRecord<AuthorType>): AuthorType[] {
  if (!keys || !storage) {
    return [];
  }

  return joinRelatedTable(keys, storage) as AuthorType[];
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
  const records: readonly TalkFields[] = (await baseTable
    .select(whereFilter)
    .all()) as TalkFields[];

  if (!records) {
    return {};
  }

  const mappedRow: readonly TalkType[] = await getMappedRecords(records);

  return mappedRow ? mappedRow[0] : {};
}

/**
 * Get all Talks objects from `Talks` table by keys
 *
 * @param keys
 * @param limit
 */
export async function getTalksListByKeys(keys: string[], limit?: number) {
  return await getRelatedRecordsByKeys<TalkFields, TalkType>(
    baseTable,
    getMappedRecords,
    keys,
    limit
  );
}
