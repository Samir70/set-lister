import { useState } from 'react'
import styles from '../styles/SearchResults.module.css'

function SearchResults() {
  const [resultList, setResultList] = useState([])

  return (
    <div>
      <h2>Songs to include</h2>
    </div>
  )
}

export default SearchResults
