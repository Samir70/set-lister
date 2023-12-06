import { useState } from 'react'
import styles from '../styles/SearchBar.module.css'

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('')
  const handleChangeTerm = (e) => {
    setSearchTerm(e.target.value)
    props.onAction(e.target.value)
  }

  return (
    <div>
      <h2>Search Bar</h2>
      <input id="search-term"
          type="text" name="search-termsetlist-name"
          value={searchTerm} onChange={handleChangeTerm} />
      <button>Search</button>
    </div>
  )
}

export default SearchBar
