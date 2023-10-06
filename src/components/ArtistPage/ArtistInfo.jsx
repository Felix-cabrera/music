import React from 'react'

const ArtistInfo = ({artist}) => {
  return (
    <section className='artist'>
        <header className='artist__header'>
            <img className='artist__img' src={artist?.images[0].url} alt="" />
        </header>
        <article className='artist__article'>
            <h2 className='artist__title'>{artist?.name}</h2>
            <ul>
                <li><span className='artist__label'>Followers: </span><span className='artist__p'>{artist?.followers.total}</span></li>
                <li><span className='artist__label'>Popularity: </span><span className='artist__p'>{artist?.popularity}</span></li>
                <li><span className='artist__label'>Genres: </span>
                <ul className='item__container'>
                    {
                        artist?.genres.map( genre => (
                            <li className='artist__item' key={genre}>{genre}</li>
                        ))
                    }
                </ul>
                </li>
            </ul>
        </article>
    </section>
  )
}

export default ArtistInfo