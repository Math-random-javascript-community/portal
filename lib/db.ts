const Airtable = require('airtable');

const Db = {
  dbInstance: new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID),

  getInstance() { 
    return this.dbInstance;
  }
};

const getDataBase = () => {
  return Db.getInstance();
};

export default getDataBase;