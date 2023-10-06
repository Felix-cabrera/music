import React, { useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import TrackInfo from '../components/TrackPage/TrackInfo'
import TrackRelated from '../components/TrackPage/TrackRelated'

const TrackPage = () => {

  const { id } = useParams()
  const [track, getTrack] = useFetch()

  useEffect(() => {
    getTrack(`/api/tracks/${id}`)
  },[id])

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }


  return (
    <div className='trackInfo__container'>
        <span className='back' onClick={handleBack}>Back</span>
        <TrackInfo 
            track={track}
        />
        <TrackRelated 
            artist={track?.artists[0].name}
        />
    </div>
  )
}

export default TrackPage