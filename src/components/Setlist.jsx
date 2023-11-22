import { useState } from 'react'
import styles from '../styles/Setlist.module.css'
import Tracklist from './Tracklist'

function Setlist(props) {
  const [setlist, setSetlist] = useState([])
  const [setlistName, setSetlistName] = useState("")

  const handleChange = (e) => {
    setSetlistName(e.target.value)
  }

  return (
    <div>
      <label for="setlist-name">Setlist name: </label>
      <input id="setlist-name"
        type="text" name="setlist-name"
        value={setlistName} onChange={handleChange} />
      <Tracklist songlist={props.tra} />
    </div>
  )
}

export default Setlist
