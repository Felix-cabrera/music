import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ArtistInfo from '../components/ArtistPage/ArtistInfo'
import ArtistAlbum from '../components/ArtistPage/ArtistAlbum'
import ArtistSongsTop from '../components/ArtistPage/ArtistSongsTop'
import './style/artistStyle.css'

const ArtistPage = () => {

  const {id} = useParams()

  const [artist, getArtist] = useFetch()

  useEffect(() => {
    getArtist(`/api/artists/${id}`)
  },[id])
  console.log(artist)

  return (
    <div className='artist__container'>
        <Link className='artist__back' to='/'>Atras</Link>
        <ArtistInfo 
            artist={artist}
        />
        <ArtistAlbum 
            albums={artist?.albums}
        />
        <ArtistSongsTop 
            tracks={artist?.songsTop}
        />
    </div>
  )
}

export default ArtistPage