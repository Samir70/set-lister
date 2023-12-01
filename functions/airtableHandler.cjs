const { formattedReturn } = require("./helpers/formattedReturn.cjs");
const { getSongs } = require('./helpers/getSongs.cjs');
const { saveSetlist } = require('./helpers/saveSetlist.cjs')

exports.handler = async (event) => {
  console.log("In the handler!")
  switch (event.httpMethod) {
    case "GET": { return await getSongs(event) }
    case "POST": { return await saveSetlist(event) }
    default: { return formattedReturn(405, {}) }
  }
}