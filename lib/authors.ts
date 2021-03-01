import getDataBase, {getRelatedRecordsByKeys, RecordType} from './db';
import {AuthorType} from '../interfaces';

const base = getDataBase();
const baseTable: Airtable.Table<any> = base('Authors');

/**
 * Get mapped records
 * 
 * @param records
 */
const getMappedRecords = function (records: readonly RecordType[]): AuthorType[] {
  return records.map((record: RecordType) => mapRow(record));
};

/**
 *  Map a record as Author
 *  
 * @param record
 */
const mapRow = function (record: RecordType): AuthorType {
  const {id, fields} = record;

  return {
    id: id,
    Id: fields['Id'],
    name: fields['Name'] ?? '',
    email: fields['Email'] ?? '',
    about: fields['About'] ?? '',
    links: fields['Links'] ?? [],
    photo: fields['Photo'] ?? [],
    status: fields['Status'] ?? ''
  };
};

/**
 * Get Author object by `id`
 *
 * @param id
 */
export async function getAuthor(id: number) {

  if (!id) {
    return {};
  }

  const whereFilter = {
    filterByFormula: `({Id} = ${id})`,
    maxRecords: 1
  };
  const records: readonly RecordType[] = await baseTable.select(whereFilter).all();

  if (!records) {
    return {};
  }

  const mappedRow: readonly AuthorType[] = await getMappedRecords(records);

  return mappedRow && mappedRow[0] ? mappedRow[0] : {};
}

/**
 *  Get all Authors objects from `Authors` table by keys
 *
 * @param keys
 * @param limit
 */
export async function getAuthorsListByKeys(keys: string[], limit?: number) {
  return await getRelatedRecordsByKeys(baseTable, getMappedRecords, keys, limit);
}