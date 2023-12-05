import { useState } from 'react'
import styles from '../styles/Setlist.module.css'
import Tracklist from './Tracklist'

function Setlist(props) {
  const [setlistName, setSetlistName] = useState("")
  const [gigDate, setGigDate] = useState("")

  const handleChange = (e) => {
    setSetlistName(e.target.value)
  }

  const handleTrackChange = (track) => {
    props.onAction("setlist", track)
  }

  const handleDateChange = (e) => {
    setGigDate(e.target.value)
    console.log("new date:", gigDate)
  }

  const saveSetlist = async () => {
    try {
      await fetch('/api/airtableHandler', {
        method: "POST",
        body: JSON.stringify({
          Venue: setlistName,
          Date: gigDate,
          Songs: props.tracks.map(s => s.id)
        })
      })
    } catch (err) {
      console.log("saveSetlist in Setlist component:", err)
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="setlist-name">Venue: </label>
        <input id="setlist-name"
          type="text" name="setlist-name"
          value={setlistName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="gig-date">Date: </label>
        <input id="gig-date"
          type="date" name="gig-date"
          value={gigDate} onChange={handleDateChange} />
      </div>
      <Tracklist songlist={props.tracks}
        addOrSubtract="-"
        onTrackChange={handleTrackChange} />
      <button onClick={saveSetlist}>Save</button>
    </div>
  )
}

export default Setlist
