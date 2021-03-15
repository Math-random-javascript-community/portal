import { getDataBase, getRelatedRecordsByKeys, MappedRecords, DbRecord } from './db';
import { AuthorType } from '../interfaces';

const base = getDataBase();
const baseTable: Airtable.Table<any> = base('Authors');

interface AuthorFields extends DbRecord {}

/**
 * Get mapped records
 *
 * @param records
 */
const getMappedRecords: MappedRecords<AuthorFields, AuthorType> = function (
  records: readonly AuthorFields[]
): AuthorType[] {
  return records.map((record: AuthorFields) => mapRow(record));
};

/**
 *  Map a record as AuthorType
 *
 * @param record
 */
const mapRow = function (record: AuthorFields): AuthorType {
  const { id, fields } = record;

  return {
    id: id,
    Id: fields['Id'],
    name: fields['Name'] ?? '',
    email: fields['Email'] ?? '',
    about: fields['About'] ?? '',
    links: fields['Links'] ?? [],
    photo: fields['Photo'] ?? [],
    status: fields['Status'] ?? ''
  } as AuthorType;
};

/**
 * Get AuthorType object by `id`
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
  const records: readonly AuthorFields[] = await baseTable.select(whereFilter).all();

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
  return await getRelatedRecordsByKeys<AuthorFields, AuthorType>(
    baseTable,
    getMappedRecords,
    keys,
    limit
  );
}
