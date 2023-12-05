import { useState } from 'react'
import styles from '../styles/Setlist.module.css'
import Tracklist from './Tracklist'

function Setlist(props) {
  const [setlistName, setSetlistName] = useState("")

  const handleChange = (e) => {
    setSetlistName(e.target.value)
  }

  const handleTrackChange = (track) => {
    props.onAction("setlist", track)
  }

  const saveSetlist = async () => {
    try {
      await fetch('/api/airtableHandler', {
        method: "POST",
        body: JSON.stringify({
          Venue: setlistName,
          Date: "2023-12-24",
          Songs: props.tracks.map(s => s.id)
        })
      })
    } catch (err) {
      console.log("saveSetlist in Setlist component:", err)
    }
  }

  return (
    <div>
      <label htmlFor="setlist-name">Setlist name: </label>
      <input id="setlist-name"
        type="text" name="setlist-name"
        value={setlistName} onChange={handleChange} />
      <Tracklist songlist={props.tracks}
        addOrSubtract="-"
        onTrackChange={handleTrackChange} />
      <button onClick={saveSetlist}>Save</button>
    </div>
  )
}

export default Setlist
