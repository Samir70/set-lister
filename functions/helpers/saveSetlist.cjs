const { gigTable } = require('./airtable.cjs')
const { formattedReturn } = require('./formattedReturn.cjs')

exports.saveSetlist = async (event) => {
  const fields = JSON.parse(event.body)
  // {
  //   "Venue": "test giglist",
  //   "Date": "2023-12-24",
  //   "Songs": [
  //     "recMVwCOekZXw9rKN",
  //     "recLpUZ67TbGqKFF1"
  //   ]
  // }
  try {
    const createdGiglist = await gigTable.create([{ fields }])
    return formattedReturn(200, createdGiglist)
  } catch (err) {
    console.log(err)
    return formattedReturn(500, { msg: "ERROR: trying to write a giglist" })
  }
  console.log("need to save a setlist")
}