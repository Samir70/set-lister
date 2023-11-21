import { useState } from 'react'
import styles from '../styles/Setlist.module.css'

function Setlist() {
  const [setlist, setSetlist] = useState([])
  const [setlistName, setSetlistName] = useState("")

  const handleChange = (e) => {
    setSetlistName(e.target.value)
  }

  return (
    <input id="setlist-name"
      type="text" name="setlist-name"
      value={setlistName} onChange={handleChange} />
  )
}

export default Setlist
