const { songTable } = require('./airtable.cjs')
const { formattedReturn } = require('./formattedReturn.cjs')

exports.getSongs = async (event) => {
  console.log("In getSongs!")
  try {
    const songs = await songTable.select().firstPage()
    return formattedReturn(200, songs)
  } catch (err) {
    console.log(err)
    return formattedReturn(500, { msg: "ERROR: take a look in the console!" })
  }
}