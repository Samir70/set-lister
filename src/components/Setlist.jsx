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

  return (
    <div>
      <label htmlFor="setlist-name">Setlist name: </label>
      <input id="setlist-name"
        type="text" name="setlist-name"
        value={setlistName} onChange={handleChange} />
      <Tracklist songlist={props.tracks}
        addOrSubtract="-"
        onTrackChange={handleTrackChange} />
    </div>
  )
}

export default Setlist
