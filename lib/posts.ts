import { getDataBase, getRelatedRecordsByKeys, DbRecord, MappedRecords } from './db';
import { PostType } from '../interfaces';

const base = getDataBase();
const baseTable = base('Posts');

interface PostFields extends DbRecord {}

/**
 * Get mapped records
 *
 * @param records
 */
const getMappedRecords: MappedRecords<PostFields, PostType> = function (
  records: readonly PostFields[]
): PostType[] {
  return records.map((record: PostFields) => mapRow(record));
};

/**
 *  Map a record as Post
 *
 * @param record
 */
const mapRow = function (record: PostFields): PostType {
  const { id, fields } = record;

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
    status: fields['Status'] ?? ''
  } as PostType;
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
  const records: readonly PostFields[] = await baseTable.select(whereFilter).all();

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
  return await getRelatedRecordsByKeys<PostFields, PostType>(
    baseTable,
    getMappedRecords,
    keys,
    limit
  );
}