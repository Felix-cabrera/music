import React from 'react'
import PlayName from './PlayName'
import usePlaylist from '../../hooks/usePlaylist'
import { useParams } from 'react-router-dom'

const PlaylistId = ({track}) => {

  const {deletePlayList} = usePlaylist()
  const {id} = useParams()
  const handleDelete = () => {
    deletePlayList(id)
  }
  console.log(id)
  return (
    <article>
        <div>
            {
                track.tracks.map(track => (
                    <PlayName 
                      key={track.id}
                      track={track}
                    />
                    
                ))
                
            }
            <i className='bx bx-minus-circle footer__item' onClick={handleDelete}></i>
        </div>
    </article>
  )
}

export default PlaylistId