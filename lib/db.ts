import Airtable from 'airtable';
import { Entity } from '../interfaces';

export interface DbRecord extends Airtable.Record<Airtable.FieldSet> {}
interface DbTable extends Airtable.Table<Airtable.FieldSet> {}

export interface MappedRecords<F extends DbRecord, T extends Entity> {
  (records: readonly F[]): T[] | Promise<T[]>;
}
export interface RelatedRecord<T> {
  [id: string]: T;
}
export interface RelatedKeys {
  [tableName: string]: string[];
}

/**
 * DB singleton
 */
const Db = (function () {
  let dbInstance: Airtable.Base;

  const createDbInstance = function () {
    return new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_BASE_ID);
  };

  return {
    getInstance: function () {
      return dbInstance || (dbInstance = createDbInstance());
    }
  };
})();

/**
 * Get DB instance
 */
export const getDataBase = (): Airtable.Base => {
  return Db.getInstance();
};

/**
 * Build a query filter string by Keys
 *
 * @param keys
 */
export function buildFilterByKeys(keys: string[]): string {
  if (!keys || keys.length < 1) {
    return '';
  }

  let filterString = '';
  keys.forEach((recordId, index) => {
    filterString += `RECORD_ID() = '${recordId}'`;
    if (index < keys.length - 1) {
      filterString += ', ';
    }
  });

  return `OR( ${filterString} )`;
}

/**
 * Join related table by keys
 *
 * @param keys
 * @param relatedStorage
 */
export function joinRelatedTable(keys: string[], relatedStorage: RelatedRecord<Entity>): Entity[] {
  if (!keys || !relatedStorage) {
    return [];
  }

  return keys.flat().map((key) => relatedStorage[key]);
}

/**
 * Get related records by keys
 *
 * @param baseTable
 * @param getMappedRecords
 * @param keys
 * @param limit
 */
export async function getRelatedRecordsByKeys<F extends DbRecord, T extends Entity>(
  baseTable: DbTable,
  getMappedRecords: MappedRecords<F, T>,
  keys: string[],
  limit?: number
) {
  const result: RelatedRecord<T> = {};

  if (!keys || keys.length < 1) {
    return result;
  }

  const whereFilter: Airtable.SelectOptions = {
    filterByFormula: buildFilterByKeys(keys)
  };

  if (limit && limit > 0) {
    whereFilter['maxRecords'] = limit;
  }

  const records: readonly F[] = (await baseTable.select(whereFilter).all()) as F[];

  if (!records) {
    return result;
  }

  const mappedRows: T[] = await getMappedRecords(records);

  if (!mappedRows) {
    return result;
  }

  mappedRows.forEach((item: T) => {
    result[item.id] = item;
  });

  return result;
}

/**
 * Get all related keys
 *
 * @param relatedTables
 * @param records
 */
export function getAllRelatedKeys(
  relatedTables: string[],
  records: readonly DbRecord[]
): RelatedKeys {
  const relatedKeys: RelatedKeys = {};

  if (!relatedTables || relatedTables.length < 1 || !records || records.length < 1) {
    return relatedKeys;
  }

  relatedTables.forEach((tableName: string) => {
    relatedKeys[tableName] = records
      .filter((record) => record.fields[tableName])
      .map((record) => record.fields[tableName])
      .flat() as string[];
  });

  return relatedKeys;
}
