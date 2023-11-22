import { useState } from 'react'
import styles from '../styles/SearchResults.module.css'
import Tracklist from './Tracklist'

function SearchResults(props) {
  const [resultList, setResultList] = useState(props.tracks)

  return (
    <div>
      <h2>Songs to include</h2>
      <Tracklist songlist={resultList} /> 
    </div>
  )
}

export default SearchResults
