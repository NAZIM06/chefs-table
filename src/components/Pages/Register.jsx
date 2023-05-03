import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loader from './Shared/Loader';

const Register = () => {
    const { createUser, setUser, loading, setLoading} = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        if (password.length < 6) {
            setError('Password at least 6 character long')
            return;
        } else {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    createdUser.displayName = name;
                    createdUser.photoUrl = photoUrl;
                    setUser(createdUser)
                    setLoading(false)
                    navigate(from, {replace: true})
                })
                .catch(error => {
                    const errorMessage = error.message;
                    if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                        setError('Account already exists. Please login')
                        setLoading(false)
                    }
                    console.log(errorMessage)
                })
        }
    }
    return (
        <>{
            loading && <Loader/>
        }
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse w-3/5">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Have you taken a look at our Signature Series yet? Every Friday we release a brand new masterclass from one of our chefs, where they'll show you how to recreate their favourite dishes at home.</p>
                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" placeholder="Photo url" className="input input-bordered" />
                </div>
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
                        <p className='label-text'>Already have an account? <Link to='/login'><span className='label-text link-hover text-blue-600'>Login</span></Link></p>
                    </label>
                </div>
                <div className="form-control mt-1">
                <p className='text-red-700 mt-3'>{error}</p>
                    <button className="text-center text-white font-semibold text-lg bg-orange-400 w-10/12 rounded-3xl mx-auto p-2 my-3 hover:bg-orange-500 cursor-pointer">Submit</button>
                </div>
            </div>
        </form>
            </div>
        </div>
        </>
    );
};

export default Register;