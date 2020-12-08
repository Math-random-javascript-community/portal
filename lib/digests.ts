import getDataBase from './db';
import { Digest } from '../interfaces';

const base = getDataBase();
const table = base('Digest');

const getMappedRecords = records => {
  return records.map(record => mapRecord(record));
};

const  mapRecord  = row => {
  const {fields} = row;
 
  const mRow: Digest = {
    id: fields['#'],
    date: fields['Create At'],
    content: fields['Content'],
    status: fields['Status'],
  };
  
  return mRow;
};

export async function getDigest(id: number) {
  const records:Object[] = await table.select({filterByFormula: `({#} = ${id})`, maxRecords: 1}).all();
  
  if (!records) {
    return {};
  }
  
  const mappedRecords: Digest[] = await getMappedRecords(records);
    
  return  mappedRecords[0];
}

/**
 * 
 * @param limit
 */
export async function getDigestList(limit: number) {
  const records = await table.select({maxRecords: limit, sort: [{field: "Create At", direction: "desc"}]}).all();

  if (!records) {
    return [];
  }

  return await getMappedRecords(records);
}