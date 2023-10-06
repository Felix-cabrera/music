import React from 'react'
import { deleteTrack } from '../../store/slices/tracks.slice'
import { useDispatch } from 'react-redux'

const TrackList = ({track}) => {

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteTrack(track))
    }
  return (
    <section className='track track-nodal'>
        <header className='header__track'>
            <img src={track.album.images[0].url} alt="" />
        </header>
        <article className='article__track'>
            <h3 className='title'>{track.name}</h3>
            <ul>
                {
                    track.artists.map(artist => (
                        <li className='title' key={artist.id}>{artist.name}</li>
                    ))
                }
            </ul>
        </article>
        <footer className='footer__track' onClick={handleDelete}>
            <i className='bx bx-minus-circle footer__item'></i>
        </footer>
    </section>
  )
}

export default TrackList