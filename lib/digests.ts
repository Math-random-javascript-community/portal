import getDataBase from './db';
import {Digest, Post} from '../interfaces';
import {getPostsListByKeys} from './posts';

const base = getDataBase();
const digestTable = base('Digests');

/**
 * Returns Digit rows including linked records from other tables
 * 
 * @param records
 */
const getMappedRecords = async function (records) {
  // get keys from all Posts fields
  const potsKeys = records.map(record => record.fields['Posts']).flat();

  // get all Posts objects from related Posts table by keys
  const postsList = await getPostsListByKeys(potsKeys, 10);

  // make a storage object with properties as a key and containing all related Posts objects
  const relatedPosts = {};
  postsList.forEach((item: Post) => {
    relatedPosts[item.id] = item;
  });

  return records.map(function (record) {
    return mapRecord(record, relatedPosts);
  });
};

/**
 * Returns mapped records as Digest
 * 
 * @param record
 * @param relatedRowsStorage
 */
const mapRecord = function (record, relatedRowsStorage): Digest {
  const {id, fields} = record;

  return {
    id: id,
    Id: fields['Id'],
    title: fields['Title'] ? fields['Title'] : '',
    description: fields['Description'] ? fields['Description'] : '',
    status: fields['Status'] ? fields['Status'] : '',
    digest_date: fields['Digest Date'] ? fields['Digest Date'] : '',
    posts: joinPosts(fields['Posts'], relatedRowsStorage)
  };
};

const joinRelatedData = function (keys: string[], relatedRowsStorage: object): any[] {

  if (!keys || !relatedRowsStorage) {
    return [];
  }

  return keys.flat().map((key) => { if (relatedRowsStorage[key]) return relatedRowsStorage[key]; });
};

const joinPosts = function (keys: string[], relatedRowsStorage: []): Post[]{
  return joinRelatedData(keys, relatedRowsStorage);
};

/**
 * gets lists of digests
 *
 * @param limit
 */
export async function getDigestList(limit: number) {
  const filter = {
    maxRecords: limit,
    sort: [
      {
        field: 'Digest Date',
        direction: 'desc'
      }
    ]
  };
  
  const records = await digestTable.select(filter).all();

  if (!records) {
    return [];
  }

  return await getMappedRecords(records);
}

export async function getDigest(id: number) {
  const where = {
    filterByFormula: `({Id} = ${id})`,
    maxRecords: 1
  };
  const records: Object[] = await digestTable.select(where).all();

  if (!records) {
    return {};
  }

  const mappedRecords: Digest[] = await getMappedRecords(records);

  return mappedRecords[0];
}