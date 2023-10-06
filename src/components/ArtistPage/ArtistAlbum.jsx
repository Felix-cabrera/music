import React from 'react'
import AlbumCard from './AlbumCard'

const ArtistAlbum = ({albums}) => {
  return (
    <div className='album__container'>
        <h3 className='album__title'>Artist's Album</h3>
        <div className='album__div'>
            {
                albums?.map( albumInfo => (
                    <AlbumCard 
                        key={albumInfo.id}
                        album={albumInfo}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ArtistAlbum