import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Setlist from './components/Setlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <SearchResults />
      <Setlist />
    </>
  )
}

export default App
