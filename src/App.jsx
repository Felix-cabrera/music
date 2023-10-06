import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useEffect } from 'react'
import { setCredentialsSlice } from './store/slices/credentials.slice'
import { useDispatch } from 'react-redux'
import ProtectedRoutes from './pages/ProtectedRoutes'
import TrackPage from './pages/TrackPage'
import ArtistPage from './pages/ArtistPage'
import PlaylistPage from './pages/PlaylistPage'
import PlayIdPage from './pages/PlayIdPage'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    const email = localStorage.getItem('email')
    const obj = {token,username,email}
    dispatch(setCredentialsSlice(obj))
  },[])

  return (
    <div>
      <Routes>
        <Route path='/auth/login' element={<LoginPage/>} />
        <Route path='/auth/register' element={<RegisterPage/>} />
        <Route path='/' element={<HomePage />}/>
        <Route path='/track/:id' element={<TrackPage />} />
        <Route path='/artist/:id' element={<ArtistPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/playlist' element={<PlaylistPage/>} />
          <Route path='/playlist/:id' element={<PlayIdPage />}/>
        </Route>         
      </Routes>
    </div>
  )
}

export default App
