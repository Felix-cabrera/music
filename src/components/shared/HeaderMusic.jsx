import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import { useForm } from "react-hook-form"
import usePlaylist from "../../hooks/usePlaylist"

const HeaderMusic = () => {

    const tracksPlaylist = useSelector(store => store.tracks)

    const {reset, handleSubmit, register} = useForm()
    const {postPlayList } = usePlaylist()

  const submit = data => {
    console.log(data)
    const obj = {
      ...data,
      tracks:tracksPlaylist.map(e => ({id: e.id}))
    }
    postPlayList(obj)
    reset({
      title:'',
      to:'',
      message:''
    })
  }

  return (
    <header className="music__container">
      <div className="music">
        <form className="music__form" onSubmit={handleSubmit(submit)}>
          <div className="music__div">
            <label htmlFor="title">Title</label>
            <input {...register('title')} type="text" id="title" />
          </div>
          <div className="music__div">
            <label htmlFor="to">To</label>
            <input {...register('to')} type="text" id="to" />
          </div>
          <div className="music__div">
            <label htmlFor="message">Message</label>
            <textarea {...register('message')} id="message" />
          </div>
          <div>
            {
                tracksPlaylist.map(track => (
                  <TrackList 
                    key={track.id}
                    track={track}
                  />
                ))
            }
          </div>
          <button>Create</button>
        </form>
      </div>
    </header>
  )
}

export default HeaderMusic