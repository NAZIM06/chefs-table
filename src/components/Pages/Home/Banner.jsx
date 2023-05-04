import React from 'react'
import Lottie from 'lottie-react'
import reader from '../../../assets/120972-chef.json'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <h2 className='max-w-lg mb-6 font-sans lg:text-5xl sm:text-4xl font-bold tracking-tight text-red-600'>
            Meet, Eat<br /> &<br />
            <span className='inline-block text-orange-400'>Enjoy The Food</span>
          </h2>
          <p className='text-base text-gray-700  font-serif'>
            Welcome to our restaurant where every dish is made with the freshest ingredients and bursting with flavors that will make your taste buds dance with joy.Come dine with us and experience the magic of our good food for yourself.
          </p>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-96  sm:h-96'>
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;