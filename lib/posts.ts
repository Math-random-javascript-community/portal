import getDataBase, {buildFilterByKeys} from './db';
import {Post} from '../interfaces';

const base = getDataBase();
const postsTable = base('Posts');

const getMappedRecords = function (records): Post[] {
  return records.map(record => mapRow(record));
};

const mapRow = function (record): Post {
  const {id, fields} = record;

  return {
    id: id,
    Id: fields['Id'],
    content: fields['Content'] ? fields['Content'] : '',
    tags: fields['Tags'] ? fields['Tags'] : [],
    links: fields['Links'] ? fields['Links'] : [],
    media_type: fields['Media Type'] ? fields['Media Type'] : '',
    media: fields['Media'] ? fields['Media'] : [],
    priority: fields['Priority'] ? fields['Priority'] : '',
    post_date: fields['Created at'] ? fields['Created at'] : '',
    status: fields['Status'] ? fields['Status'] : '',
  };
};

export async function getPost(id: number) {
  const where = {
    filterByFormula: `({Id} = ${id})`,
    maxRecords: 1
  };
  const records: object[] = await postsTable.select(where).all();

  if (!records) {
    return {};
  }

  const mappedRow: Post[] = await getMappedRecords(records);

  return mappedRow[0];
}

/**
 * Returns all Posts objects from Posts table by keys
 * 
 * @param limit
 */
export async function getPostsListByKeys(Keys: string[], limit: number) {
  const filter = {
    filterByFormula: buildFilterByKeys(Keys),
    maxRecords: limit
  };

  const records = await postsTable.select(filter).all();

  if (!records) {
    return [];
  }

  return getMappedRecords(records);
}