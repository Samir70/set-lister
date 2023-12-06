import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Setlist from './components/Setlist'

import { dummySongList } from './assets/dummyData'


const selectedSongs = {}
function App() {
  const [setlist, setSetlist] = useState([])
  const [searchResultList, setSearchResultList] = useState(dummySongList)
  const [allSongsList, setAllSongsList] = useState(dummySongList)
  const [searchTerm, setSearchTerm] = useState("bl")
  useEffect(() => {
    const loadSongs = async () => {
      try {
        const res = await fetch('/api/airtableHandler');
        const songs = await res.json()
        console.log("loadsongs ran")
        setSearchResultList(songs)
        setAllSongsList(songs)
        updateLists()
      } catch (err) {
        console.log("loadSongs:", err)
      }
    }
    // comment the below to stay with the dummySonglist
    loadSongs()
    return () => { }
  }, [])

  const addToSetlist = (track) => {
    setSetlist([...setlist, track])
  }

  const removeFromSetlist = (track) => {
    setSetlist(setlist.filter(t => t.id !== track.id))
  }

  const moveTrack = (origin, track) => {
    // console.log(origin, track)
    if (origin === "searchResults") {
      selectedSongs[track.id] = true
      addToSetlist(track)
    }
    if (origin === "setlist") {
      selectedSongs[track.id] = false
      removeFromSetlist(track)
    }
    updateLists()
  }

  const updateLists = () => {
    // console.log("updateLists", selectedSongs)
    setSearchResultList(allSongsList.filter(s =>
      (s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.artist.toLowerCase().includes(searchTerm.toLowerCase())) &&
      !selectedSongs[s.id]
    ))
  }

  const filterBySearch = (searchTerm) => {
    setSetlist()
  }

  return (
    <div id="app">
      <SearchBar />
      <div id="list-container">
        <SearchResults tracks={searchResultList} onAction={moveTrack} />
        <Setlist tracks={setlist} onAction={moveTrack} />
      </div>
    </div>
  )
}

export default App
