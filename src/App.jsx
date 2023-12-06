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
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    const loadSongs = async () => {
      try {
        const res = await fetch('/api/airtableHandler');
        const songs = await res.json()
        console.log("loadsongs ran")
        setSearchResultList(songs)
        setAllSongsList(songs)
        // filterBySearch("")
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
    filterBySearch(searchTerm)
  }

  const filterBySearch = (str) => {
    console.log("filterBySearch", str, allSongsList.length)
    str = str.toLowerCase()
    setSearchResultList(allSongsList.filter(s =>
      (s.title.toLowerCase().includes(str) ||
        s.artist.toLowerCase().includes(str)) &&
      !selectedSongs[s.id]
    ))
  }

  const updateSearchTerm = (str) => {
    setSearchTerm(str)
    filterBySearch(str)
  }

  return (
    <div id="app">
      <SearchBar onAction={updateSearchTerm} />
      <div id="list-container">
        <SearchResults tracks={searchResultList} onAction={moveTrack} />
        <Setlist tracks={setlist} onAction={moveTrack} />
      </div>
    </div>
  )
}

export default App
