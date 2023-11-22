import { useState } from 'react'
import styles from '../styles/SearchResults.module.css'
import Tracklist from './Tracklist'

function SearchResults(props) {
  const [resultList, setResultList] = useState([])

  return (
    <div>
      <h2>Songs to include</h2>
      <Tracklist songlist={props.tracks} /> 
    </div>
  )
}

export default SearchResults
