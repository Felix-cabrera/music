import React, { useState } from 'react'

const TrackInfo = ({track}) => {
    const [isShowPlayer, setIsShowPlayer] = useState(false)
    const handlePlayer = () => {
        setIsShowPlayer(!isShowPlayer)
      }
  return (
    <div className='trackInfo'>
         <article className='trackInfo__article'>
            <header className='trackInfo__header'>
                <img className='trackInfo__img' onClick={handlePlayer} src={track?.album.images[0].url} alt="" />
            </header>
            <section className='trackInfo__section'>
                <h3 className='title'><span className='title__p'>Song: </span>{track?.name}</h3>
                <ul>
                    {
                        track?.artists.map(artist => (
                            <li className='title' key={artist.id}>{artist.name}</li>
                        ))
                    }
                </ul>
                <p className='title'><span className='title__p'>Album: </span>{track?.album.name}</p>
                <p className='title'><span className='title__p'>Release date: </span>{track?.album.release_date}</p>
            </section>
        </article>
        {
        isShowPlayer
          && (
            <iframe
              style={{borderRadius: '12px'}}
              src={`https://open.spotify.com/embed/track/${track?.id}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )
      }
    </div>
  )
}

export default TrackInfo