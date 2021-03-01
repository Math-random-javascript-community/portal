const Airtable = require('airtable');

export type RecordType = {
  id: string
  fields: any
}
/**
 * DB singleton
 */
const Db = (function () {
  let dbInstance: Airtable.Base;

  const createDbInstance = function () {
    return new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
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
const getDataBase = ():Airtable.Base => {
  return Db.getInstance();
};

/**
 * Build a query filter string by Keys
 * 
 * @param keys
 */
export function buildFilterByKeys(keys: string[]):string {
  if (!keys || keys.length < 1) {
    return '';
  }

  let filterString = '';
  keys.forEach((recordId, index) => {
    filterString += (`RECORD_ID() = '${recordId}'`);
    if (index < (keys.length - 1)) {
      filterString += (', ');
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
export function joinRelatedTable(keys: string[], relatedStorage: any): any[] {

  if (!keys || !relatedStorage) {
    return [];
  }

  return keys.flat().map((key) => relatedStorage[key]);
}

export interface MappedRecords<T> {
  (records: T): Array<T>;
}

interface RelatedRecord<T> {
  [id: number]: T;
}

/**
 * Get related records by keys
 * 
 * @param baseTable
 * @param getMappedRecords
 * @param keys
 * @param limit
 */
export async function getRelatedRecordsByKeys(baseTable: Airtable.Table<any>, getMappedRecords, keys: string[], limit?: number) {
  const result: RelatedRecord<any> = {};

  if (!keys || keys.length < 1) {
    return result;
  }

  const whereFilter: Airtable.SelectOptions = {
    filterByFormula: buildFilterByKeys(keys)
  };

  if (limit && limit > 0) {
    whereFilter['maxRecords'] = limit;
  }

  const records: Airtable.Records<RecordType[]>  = await baseTable.select(whereFilter).all();

  if (!records) {
    return result;
  }

  const mappedRows = await getMappedRecords(records);

  if (!mappedRows) {
    return result;
  }

  mappedRows.forEach((item: {id: number}) => {
    result[item.id] = item;
  });

  return result;
}

interface RelatedKeys<T> {
  [tableName: string]: T;
}

/**
 * Get all related keys
 * 
 * @param relatedTables
 * @param records
 */
export function getAllRelatedKeys(relatedTables: string[], records: readonly RecordType[]): RelatedKeys<any> {

  const relatedKeys: RelatedKeys<any> = {};

  if (!relatedTables || relatedTables.length < 1 || !records || records.length < 1) {
    return relatedKeys;
  }
  
  relatedTables.forEach(tableName => {
    relatedKeys[tableName] = records
      .filter(record => record.fields[tableName])
      .map(record => record.fields[tableName])
      .flat();
  });

  return relatedKeys;
}

export default getDataBase;
