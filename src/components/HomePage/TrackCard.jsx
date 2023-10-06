import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracks.slice"
import { Link, useNavigate } from "react-router-dom"

const TrackCard = ({track}) => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddTrack = () => {
    dispatch(addTrack(track))
  }
  const handleArtist = (id) =>{
    navigate(`/artist/${id}`)
  }

  return (
    <section className="track">
        <header className="header__track">
            <img src={track.album.images[0].url} alt="" />
        </header>
        <article className="article__track">
            <Link className="title__link" to={`/track/${track.id}`}><h5 className="title">{track.name}</h5></Link>
            <ul>
                {
                    track.artists.map(artist => (
                        <li className="title" onClick={() => handleArtist(artist.id)} key={artist.id}>{artist.name}</li>
                    ))
                }
            </ul>
        </article>
        <footer className="footer__track">
            <a className="footer__items" target="_blank" href={track.external_urls.spotify} >
                <i className="bx bxl-spotify footer__item"></i>
            </a>
            <div className="footer__items">
                <i className='bx bx-plus-circle footer__item' onClick={handleAddTrack}></i>
            </div>
        </footer>
    </section>
  )
}

export default TrackCard