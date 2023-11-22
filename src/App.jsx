import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Setlist from './components/Setlist'

import { dummySongList } from './assets/dummyData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <SearchResults tracks={dummySongList} />
      <Setlist tracks={dummySongList} />
    </>
  )
}

export default App
