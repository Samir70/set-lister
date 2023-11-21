import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Setlist from './components/Setlist'
import Track from './components/Track'

import { dummySong } from './assets/dummyData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <SearchResults />
      <Setlist />
      <Track song={dummySong} />
    </>
  )
}

export default App
