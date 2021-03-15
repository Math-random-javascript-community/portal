import {
  getDataBase,
  getAllRelatedKeys,
  joinRelatedTable,
  DbRecord,
  RelatedRecord,
  MappedRecords,
  RelatedKeys
} from './db';
import { DigestType, PostType } from '../interfaces';
import { getPostsListByKeys } from './posts';

const base = getDataBase();
const baseTable = base('Digests');

/**
 * Related tables definition
 */
const RELATED_POSTS = 'Posts';

interface DigestFields extends DbRecord {
  fields: {
    Id: number;
    Title: string;
    Description: string;
    Status: string;
    'Digest Date': string;
    [RELATED_POSTS]?: string[];
  };
}

type RelatedStorageType = {
  [RELATED_POSTS]: RelatedRecord<PostType>;
};

/**
 * Get mapped Digest rows including linked records from other tables
 *
 * @param records
 */
const getMappedRecords: MappedRecords<DigestFields, DigestType> = async function (
  records: readonly DigestFields[]
): Promise<DigestType[]> {
  const relatedTables = [RELATED_POSTS];
  const relatedKeys: RelatedKeys = getAllRelatedKeys(relatedTables, records);
  const relatedStorage: RelatedStorageType = {
    [RELATED_POSTS]: await getPostsListByKeys(relatedKeys[RELATED_POSTS])
  };

  return records.map((record: DigestFields) => mapRecord(record, relatedStorage));
};

/**
 * Map record as Digest
 *
 * @param record AuthorFields
 * @param relatedStorage RelatedStorageType
 */
const mapRecord = function (record: DigestFields, relatedStorage: RelatedStorageType): DigestType {
  const { id, fields } = record;
  return {
    id: id,
    Id: fields['Id'],
    title: fields['Title'] ?? '',
    description: fields['Description'] ?? '',
    status: fields['Status'] ?? '',
    digest_date: fields['Digest Date'] ?? '',
    posts: fields.hasOwnProperty(RELATED_POSTS)
      ? joinPosts(fields[RELATED_POSTS], relatedStorage[RELATED_POSTS])
      : []
  } as DigestType;
};

/**
 * Join data from related Posts table
 *
 * @param keys string[]
 * @param storage RelatedRecord<PostType>
 */
const joinPosts = function (keys: string[], storage: RelatedRecord<PostType>): PostType[] {
  if (!keys || !storage) {
    return [];
  }

  return joinRelatedTable(keys, storage) as PostType[];
};

/**
 * Fetch data from base table using filter
 *
 * @param whereFilter object
 */
async function fetchBaseTable(whereFilter: object) {
  const records: readonly DigestFields[] = (await baseTable
    .select(whereFilter)
    .all()) as DigestFields[];

  if (!records) {
    return [];
  }

  const mappedRecords: readonly DigestType[] = await getMappedRecords(records);

  return mappedRecords ?? [];
}

/**
 * Get list of all Digests ordered by `Digest Date`
 *
 * @param limit
 */
export async function getDigestList(limit: number) {
  const whereFilter = {
    maxRecords: limit,
    sort: [
      {
        field: 'Digest Date',
        direction: 'desc'
      }
    ]
  };

  const records: readonly DigestType[] = await fetchBaseTable(whereFilter);

  return records ?? [];
}

/**
 * Get Digest by `id`
 *
 * @param id
 */
export async function getDigest(id: number) {
  const whereFilter = {
    filterByFormula: `({Id} = ${id})`,
    maxRecords: 1
  };
  const records: readonly DigestType[] = await fetchBaseTable(whereFilter);

  return (records && records[0]) ?? {};
}

/**
 * Get Last Digest
 */
export async function getLastDigest() {
  const whereFilter = {
    maxRecords: 1,
    sort: [
      {
        field: 'Digest Date',
        direction: 'desc'
      }
    ]
  };
  const records: readonly DigestType[] = await fetchBaseTable(whereFilter);

  return (records && records[0]) ?? {};
}
