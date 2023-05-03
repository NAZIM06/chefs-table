import React from 'react'
import Lottie from 'lottie-react'
import reader from '../../assets/hiring-pt-2.json'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <div>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            One Step <br/> Closer To Your<br /> 
            <span className='inline-block text-blue-400'>Dream Job</span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='/' className='btn md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3'>Get Started</p>
            </div>
          </Link>
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