import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Setlist from './components/Setlist'

import { dummySongList } from './assets/dummyData'


function App() {
  const [setlist, setSetlist] = useState([])
  const [searchResultList, setSearchResultList] = useState(dummySongList)
  useEffect(() => {
    const loadSongs = async () => {
      try {
        const res = await fetch('/api/airtableHandler');
        const songs = await res.json()
        console.log("loadsongs ran")
        setSearchResultList(songs)
      } catch (err) {
        console.log("loadSongs:", err)
      }
    }
    loadSongs()
    return () => {}
  }, [])

  const addToSetlist = (track) => {
    setSetlist([...setlist, track])
    setSearchResultList(searchResultList.filter(t => t.id !== track.id))
  }

  const removeFromSetlist = (track) => {
    setSearchResultList([...searchResultList, track])
    setSetlist(setlist.filter(t => t.id !== track.id))
  }

  const moveTrack = (origin, track) => {
    // console.log(origin, track)
    if (origin === "searchResults") { addToSetlist(track) }
    if (origin === "setlist") { removeFromSetlist(track) }
  }

  return (
    <>
      <SearchBar />
      <SearchResults tracks={searchResultList} onAction={moveTrack} />
      <Setlist tracks={setlist} onAction={moveTrack} />
    </>
  )
}

export default App
