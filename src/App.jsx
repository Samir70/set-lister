import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Setlist from './components/Setlist'
import Tracklist from './components/Tracklist'

import { dummySongList } from './assets/dummyData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <SearchResults />
      <Setlist />
      <Tracklist songlist={dummySongList} />
    </>
  )
}

export default App
