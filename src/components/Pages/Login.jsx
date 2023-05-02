import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse w-3/5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Have you taken a look at our Signature Series yet? Every Friday we release a brand new masterclass from one of our chefs, where they'll show you how to recreate their favourite dishes at home.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className='label-text'>Don't have an account? <Link to='/register'><span className='label-text link-hover text-blue-600'>Create Account</span></Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                    <div className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-3 justify-between items-center hover:bg-red-200 cursor-pointer'>
                <FcGoogle className='h-6 w-6' />
                <p className='font-semibold mx-auto'>Continue with Google</p>
            </div>
            <div className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-3 justify-between items-center  hover:bg-red-200 cursor-pointer'>
                <FaGithub className='h-6 w-6' />
                <p className='font-semibold mx-auto'>Continue with Github</p>
            </div>
                </div>
            </div>
        </div>
    )
};

export default Login;