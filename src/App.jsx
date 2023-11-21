import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Setlist from './components/Setlist'
import Track from './components/Track'
import Tracklist from './components/Tracklist'

import { dummySong } from './assets/dummyData'
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
