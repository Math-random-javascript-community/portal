const Airtable = require('airtable');

const Db = (function () {
  let dbInstance;
  
  const createDbInstance = function(){
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

const getDataBase = () => {
  return Db.getInstance();
};

export function buildFilterByKeys(keys) {
  let filterString = '';
  keys.forEach((recordId, index) => {
    filterString += (`RECORD_ID() = '${recordId}'`);
    if (index < (keys.length - 1)) {
      filterString += (', ');
    }
  });
  
  return `OR( ${filterString} )`;
}

export default getDataBase;