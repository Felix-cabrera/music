import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import TrackCard from '../HomePage/TrackCard'

const TrackRelated = ({artist}) => {

  const [tracksList, getTracksList] = useFetch()
  useEffect(() => {
    if(artist){
        getTracksList(`/api/tracks?limit=10&q=${artist}`)
    }
  },[artist])
  console.log(tracksList)
  return (
    <div>
        <h3>Track Related</h3>
        <div>
            {
                tracksList?.tracks.items.map(track => (
                    <TrackCard
                        key={track.id}
                        track={track}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default TrackRelated