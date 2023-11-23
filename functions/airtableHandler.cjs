const { formattedReturn } = require("./helpers/formattedReturn.cjs");
const { getSongs } = require('./helpers/getSongs.cjs');

exports.handler = async (event) => {
  console.log("In the handler!")
  switch (event.httpMethod) {
    case "GET": { return await getSongs(event) }
    default: { return formattedReturn(405, {}) }
  }
}