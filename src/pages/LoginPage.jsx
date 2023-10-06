import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const LoginPage = () => {

    const {register, reset, handleSubmit} = useForm()
    const {loginUser} = useAuth()

    const submit = data => {
        loginUser(data)
        reset({
            email:'',
            password:''
        })
    }

  return (
    <main className='login'>
        <h1 className='login__title'><i className='bx bx-music'></i> Share music</h1>
        <div className='login__container'>
            <img className='login__img' src="./images/bro.png" alt="" />
            <article className='login__arti'>
                <h2 className='login__title' >Login</h2>
                <form className='login__form' onSubmit={handleSubmit(submit)}>
                    <div className='form'>
                        <label htmlFor="email">Email</label>
                        <input className= 'form__input'  {...register('email')} type="text" id='email'/>
                    </div>
                    <div className='form'>
                        <label htmlFor="password">Password</label>
                        <input className='form__input' {...register('password')} type="password" id='password'/>
                    </div>
                    <button className='login__button' >Sign up</button>
                </form>
                <p>Do you have an account? <Link to='/auth/register'>Go to register</Link></p>
            </article>
        </div>
    </main>
  )
}

export default LoginPage