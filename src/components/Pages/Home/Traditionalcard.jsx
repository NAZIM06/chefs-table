import React from 'react';
import { Link } from 'react-router-dom';

const Traditionalcard = ({tf}) => {
    return (
        <div>
            <div className="w-80 mx-4 my-4">
            <Link href="link" className="cursor-pointer block">
            <figure className="rounded-lg overflow-hidden">
            <img className='h-64 w-full object-cover' src={tf.image} alt="car!" />
            <figcaption className="p-4 bg-white ">  
                <h2 className="text-lg font-bold mb-4 leading-tight">{tf.name}</h2>
                <p>{tf.description}</p>
                </figcaption>
                </figure>
                </Link>
            </div>
        </div>
    )
};

export default Traditionalcard;