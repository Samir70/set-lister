require('dotenv').config()
var Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIR_TABLE_PAT
});
var base = Airtable.base(process.env.AIR_TABLE_BASE_ID);

// var base = new Airtable({ apiKey: process.env.AIR_TABLE_PAT }).base();
const songTable = base(process.env.AIR_TABLE_SONGLIST_ID)

module.exports = { songTable }
