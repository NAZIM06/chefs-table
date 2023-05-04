import React from 'react'
import Lottie from 'lottie-react'
import reader from '../../../assets/120972-chef.json'

const Banner = () => {
  return (
    <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 flex justify-between lg:mb-0'>
        <div className='max-w-lg mb-6 lg:mt-8'>
          <h2 className='text-5xl font-bold mb-5 text-red-600'>
            Meet, Eat<br /> &<br />
            <span className='inline-block text-orange-400'>Enjoy The Food</span>
          </h2>
          <p className='text-base text-gray-700  font-serif'>
            Welcome to our restaurant where every dish is made with the freshest ingredients and bursting with flavors that will make your taste buds dance with joy.Come dine with us and experience the magic of our good food for yourself.
          </p>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='ml-6'>
        <div className='w-3/5 mx-auto'>
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;