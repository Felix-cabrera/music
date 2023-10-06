import axios from "axios"
import { useState } from "react"
import  getConfigToken  from "../services/getConfigToken";
import { setTracksSlice } from "../store/slices/tracks.slice";
import { useDispatch } from "react-redux";

const usePlaylist = () => {
  const [playList, setPlayList] = useState([])
  const baseUrl ='https://playlist-share-dev.fl0.io'
  const dispatch = useDispatch()

  const getPlayList = () => {
    const url = `${baseUrl}/api/playlists/me`
    axios.get(url, getConfigToken())
      .then(res => setPlayList(res.data))
      .catch(err => console.log(err))
  }

  const postPlayList = (data) => {
    const url = `${baseUrl}/api/playlists`
    axios.post(url, data, getConfigToken())
      .then(res => {
        console.log(res.data)
        setPlayList([...playList, res.data.info])
        dispatch(setTracksSlice([]))
    })
      .catch(err => console.log(err))
  }

  const deletePlayList = (id) => {
    const url = `${baseUrl}/api/Playlist/${id}`
    axios.delete(url,getConfigToken())
        .then(res => {
          console.log(res.data)
          setPlayList(playList.filter(e => e.id !== id))
        })
        .catch(err => console.log(err))

  }
  return {playList, getPlayList, postPlayList,deletePlayList}
}

export default usePlaylist