import getDataBase, {getAllRelatedKeys, joinRelatedTable, RecordType} from './db';
import {DigestType, PostType} from '../interfaces';
import {getPostsListByKeys} from './posts';

const base = getDataBase();
const baseTable = base('Digests');

/**
 * Related tables definition
 */
const RELATED_POSTS = 'Posts';

type RelatedStorageType = {
  [RELATED_POSTS]: any
}

/**
 * Get mapped Digest rows including linked records from other tables
 *
 * @param records
 */
const getMappedRecords = async function (records: RecordType[]) {
  const relatedTables = [
    RELATED_POSTS
  ];
  const relatedKeys = getAllRelatedKeys(relatedTables, records);
  const relatedStorage: RelatedStorageType = {
    [RELATED_POSTS]: await getPostsListByKeys(relatedKeys[RELATED_POSTS])
  };

  return records.map((record: RecordType) =>
    mapRecord(record, relatedStorage)
  );
};

/**
 * Map record as Digest
 * 
 * @param record RecordType
 * @param relatedStorage RelatedStorageType
 */
const mapRecord = function (record: RecordType, relatedStorage: RelatedStorageType): DigestType {
  const {id, fields} = record;

  return {
    id: id,
    Id: fields['Id'],
    title: fields['Title'] ?? '',
    description: fields['Description'] ?? '',
    status: fields['Status'] ?? '',
    digest_date: fields['Digest Date'] ?? '',
    posts: (fields[RELATED_POSTS] ? joinPosts(fields[RELATED_POSTS], relatedStorage[RELATED_POSTS]) : [])
  };
};

/**
 * Join data from related Posts table
 *
 * @param keys string[]
 * @param relatedStorage RelatedStorageType
 */
const joinPosts = function (keys: string[], relatedStorage: RelatedStorageType): PostType[] {
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
  const records: RecordType[] = await baseTable.select(whereFilter).all();

  if (!records) {
    return [];
  }

  const mappedRecords: DigestType[] = await getMappedRecords(records);

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

  const records: DigestType[] = await fetchBaseTable(whereFilter);

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
  const records: DigestType[] = await fetchBaseTable(whereFilter);

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
  const records: DigestType[] = await fetchBaseTable(whereFilter);

  return (records && records[0]) ?? {};
}
