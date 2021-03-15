import { getDataBase, getRelatedRecordsByKeys, MappedRecords, DbRecord } from './db';
import { AuthorEntity } from '../interfaces';

const base = getDataBase();
const baseTable: Airtable.Table<any> = base('Authors');

interface AuthorRecord extends DbRecord {}

/**
 * Get mapped records
 *
 * @param records
 */
const getMappedRecords: MappedRecords<AuthorRecord, AuthorEntity> = function (
  records: readonly AuthorRecord[]
): AuthorEntity[] {
  return records.map((record: AuthorRecord) => mapRow(record));
};

/**
 *  Map a record as AuthorEntity
 *
 * @param record
 */
const mapRow = function (record: AuthorRecord): AuthorEntity {
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
  } as AuthorEntity;
};

/**
 * Get AuthorEntity object by `id`
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
  const records: readonly AuthorRecord[] = await baseTable.select(whereFilter).all();

  if (!records) {
    return {};
  }

  const mappedRow: readonly AuthorEntity[] = await getMappedRecords(records);

  return mappedRow && mappedRow[0] ? mappedRow[0] : {};
}

/**
 *  Get all Authors objects from `Authors` table by keys
 *
 * @param keys
 * @param limit
 */
export async function getAuthorsListByKeys(keys: string[], limit?: number) {
  return await getRelatedRecordsByKeys<AuthorRecord, AuthorEntity>(
    baseTable,
    getMappedRecords,
    keys,
    limit
  );
}
