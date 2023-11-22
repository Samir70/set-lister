import { useState } from 'react'
import styles from '../styles/SearchResults.module.css'
import Tracklist from './Tracklist'

function SearchResults(props) {
  const handleTrackChange = (track) => {
    props.onAction("searchResults", track)
  }
  return (
    <div>
      <h2>Songs to include</h2>
      <Tracklist songlist={props.tracks} 
        onTrackChange={handleTrackChange}
        addOrSubtract={"+"} />
    </div>
  )
}

export default SearchResults
