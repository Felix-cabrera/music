import React from 'react'

const PlayName = ({track}) => {
 
  return (
    <div className='artist__container'>
      <img src={track.album.images[0].url} alt="" />
      <h4>{track.name}</h4>
        <ul>
          {
            track.artists.map(e => (
              <li key={e.id}>{e.name}</li>
            ))
          }
        </ul>   
    </div>
  )
}

export default PlayName