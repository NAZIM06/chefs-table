/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Provider/AuthProvider';
import Loader from './Shared/Loader';

const Login = () => {
    const { signInUser, loading, setLoading, githubSignInUser, googleSignInUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setLoading(false)
                navigate(from, { replace: true })
                console.log(loggedUser)
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
                    setError('Password or Email invalid')
                    setLoading(false)
                }
                console.log(errorMessage)
            })
        // console.log(event.target.email.value)
    }

    const handleGoogleSignIn = () => {
        googleSignInUser()
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    const handleGithubLogin = () => {
        githubSignInUser()
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }
    return (
        <>
        
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-3/5">
                    <div className="text-center lg:text-left ml-5">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Have you taken a look at our Signature Series yet? Every Friday we release a brand new masterclass from one of our chefs, where they'll show you how to recreate their favourite dishes at home.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <p className='label-text'>Don't have an account? <Link to='/register'><span className='label-text link-hover text-blue-600'>Create Account</span></Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-1">
                                {error && <p className='text-red-700 mt-3'>{error}</p>}
                                    <button type="submit" className="text-center text-white font-semibold text-lg bg-orange-400 w-10/12 rounded-3xl mx-auto p-2 my-2 hover:bg-orange-500 cursor-pointer ">Login</button>
                                </div>
                            </div>
                        </form>
                        <div onClick={handleGoogleSignIn} className='flex w-10/12 rounded-3xl mx-auto p-2 my-1 justify-between items-center hover:bg-orange-400 hover:text-white cursor-pointer border-2'>
                            <FcGoogle className='h-6 w-6' />
                            <p className='font-semibold mx-auto'>Continue with Google</p>
                        </div>
                        <div onClick={handleGithubLogin} className='flex w-10/12 rounded-3xl mx-auto p-2 mb-5 justify-between items-center hover:bg-orange-400 hover:text-white cursor-pointer border-2'>
                            <FaGithub className='h-6 w-6' />
                            <p className='font-semibold mx-auto'>Continue with Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;