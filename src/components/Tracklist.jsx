import { useState } from 'react'
import styles from '../styles/Tracklist.module.css'
import Track from './Track'

// Purpose of this component is to render a list of tracks

function Tracklist(props) {
  // const [tracklist, setTracklist] = useState(props.songlist)

  return (
    <>
      {props.songlist.map((t, idx) => {
        return (
          <Track song={t} key={idx} 
          handleChange={() => props.onTrackChange(t)} 
          addOrSubtract={props.addOrSubtract} />
        )
      })}
    </>
  )
}

export default Tracklist
