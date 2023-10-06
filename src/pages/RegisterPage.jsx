import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';
const RegisterPage = () => {


  const {reset, handleSubmit, register} = useForm()
  const {registerUser} = useAuth()
  const submit = data => {
    registerUser(data)
  }
  
  return (
    <main className='register'>
      <h1 className='register__title'><i className='bx bx-music'></i> Share music</h1>
      <div className='register__container'>
        <img className='register__img' src="./images/sist.png" alt="" />
        <article className='register__arti'>
          <h2 className='register__title' >Register</h2>
            <form className='register__form' onSubmit={handleSubmit(submit)}>
                <div className='form'>
                    <label htmlFor="email">Email</label>
                    <input className='form__input'{...register('email')} type="email" id="email" />
                </div>
                <div className='form'>
                    <label htmlFor="name">name</label>
                    <input className='form__input'{...register('name')} type="text" id="name" />
                </div>
                <div className='form'>
                    <label htmlFor="password">Password</label>
                    <input className='form__input'{...register('password')} type="password" id="password" />
                </div>
                <button className='register__button'>Sign up</button>
            </form>
            <p>Are you register? <Link to={'/auth/login'}>Go to Loading</Link></p>
        </article>
        </div>
    </main>
  )
}

export default RegisterPage