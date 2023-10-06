import React from 'react'

const AlbumCard = ({album}) => {

  const yearReleaseDate = (new Date(album.release_date)).getFullYear()

  return (
    <div className='album'>
        <header>
            <img className='album__img' src={album.images[0].url} alt="" />
        </header>
        <h4 className='album__label'>{album.name}</h4>
        <span className='album__p'>{yearReleaseDate}</span>
    </div>
  )
}

export default AlbumCard