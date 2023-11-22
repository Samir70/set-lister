import { useState } from 'react'
import styles from '../styles/Track.module.css'

function Track(props) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className={styles.trackBox} onClick={() => props.handleChange(props.song.id)}>
        <p className={[styles.toggle, styles.dataBlock].join(" ")}> {props.addOrSubtract} </p>
        <p className={styles.dataBlock}>
          <span className={styles.songName}>{props.song.title} </span>
          by <span className={styles.artistName}>{props.song.artist}</span>
        </p>
      </div>
    </div>
  )
}

export default Track
