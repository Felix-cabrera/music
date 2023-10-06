import { useNavigate } from 'react-router-dom'
import usePlaylist from '../hooks/usePlaylist'
import { useEffect } from 'react'

const PlaylistPage = () => {
  const { playList, getPlayList, deletePlayList} = usePlaylist()

  useEffect(() => {
    getPlayList()
  },[])

  const navigate = useNavigate()

  const handlePlaylist = (id) => {
    navigate(`/playlist/${id}`)
  }
  const handleDelete = (id) => {
    deletePlayList(id)
  }
  console.log()
  return (
    <article>
      <nav className="home__nav">
        <div className="nav">
          <h1>Gift Music</h1>
          <ul className="nav__ul">
            <li className="nav__item">My music</li>
            <li className="nav__item">Grabaciones</li>
          </ul>
        </div>
      </nav>
        {
            playList.map(track =>(
              <h3 key={track.id} onClick={() => handlePlaylist(track.id)}>{track.title}{<i className='bx bx-minus-circle footer__item' onClick={() => handleDelete(track.id)}></i>}</h3>
            ))
        }
    </article>
  )
}

export default PlaylistPage