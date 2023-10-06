import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/HomePage/TrackCard"
import './style/homeStyle.css'

const HomePage = () => {

  const [listTracks, getListTracks] = useFetch()
  const [inputValue, setInputValue] = useState('ricardo arjona')
  const [quantityPerPage, setQuantityPerPage] = useState(10)

  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  },[inputValue, quantityPerPage])

  const inputSearch = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTracksPerPage = e =>{
    setQuantityPerPage(e.target.value)
  }
  
  return (
    <div className="home">
      <nav className="home__nav">
        <div className="nav">
          <h1>Gift Music</h1>
          <ul className="nav__ul">
            <li className="nav__item">My music</li>
            <li className="nav__item">Grabaciones</li>
          </ul>
        </div>
      </nav>
      <div className="home__container">
        <form className="home__form" onSubmit={handleSearch}>
          <input ref={inputSearch} type="text" />
          <select onChange={handleTracksPerPage} defaultValue={handleTracksPerPage} >
            {
              [2, 4, 6, 8, 10].map(tracksPerPage =>(
                <option key={tracksPerPage} value={tracksPerPage}>{tracksPerPage}</option>
              ))
            }
          </select>
        </form>
        <div className="trackCard">
          {
            listTracks?.tracks.items.map(track => (
              <TrackCard 
              key={track.id}
              track={track}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage