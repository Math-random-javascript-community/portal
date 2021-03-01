import getDataBase, {getRelatedRecordsByKeys, RecordType} from './db';
import {PostType} from '../interfaces';

const base = getDataBase();
const baseTable = base('Posts');

/**
 * Get mapped records
 *
 * @param records
 */
const getMappedRecords = function (records: readonly RecordType[]): PostType[] {
  return records.map(record => mapRow(record));
};

/**
 *  Map a record as Post
 *
 * @param record
 */
const mapRow = function (record: RecordType): PostType {
  const {id, fields} = record;

  return {
    id: id,
    Id: fields['Id'],
    content: fields['Content'] ?? '',
    tags: fields['Tags'] ?? [],
    links: fields['Links'] ?? [],
    media_type: fields['Media Type'] ?? '',
    media: fields['Media'] ?? [],
    priority: fields['Priority'] ?? '',
    post_date: fields['Created at'] ?? '',
    status: fields['Status'] ?? '',
  };
};

/**
 * Get Digest by `id`
 * 
 * @param id
 */
export async function getPost(id: number) {
  const whereFilter = {
    filterByFormula: `({Id} = ${id})`,
    maxRecords: 1
  };
  const records: readonly RecordType[]  = await baseTable.select(whereFilter).all();

  if (!records) {
    return {};
  }

  const mappedRow: readonly PostType[] = await getMappedRecords(records);

  return mappedRow[0];
}

/**
 * Returns all Posts objects from `Posts` table by keys
 *
 * @param keys
 * @param limit
 */
export async function getPostsListByKeys(keys: string[], limit?: number) {
  return await getRelatedRecordsByKeys(baseTable, getMappedRecords, keys, limit);
}

