import { useState } from 'react'
import styles from '../styles/SearchBar.module.css'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <h2>Search Bar</h2>
      <button>Search</button>
    </div>
  )
}

export default SearchBar
