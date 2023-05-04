import React from 'react';
import { Link } from 'react-router-dom';

const Extrasection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/./public/smiling-oriental-street-food-chef-kebab-shawarma-vector-21091653.webp" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Want to know more about us!</h1>
      <p className="py-6">We are very happy to have you here. Click the button to know more about us.</p>
     <Link to ='/aboutus'> <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-md">About Us</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Extrasection;