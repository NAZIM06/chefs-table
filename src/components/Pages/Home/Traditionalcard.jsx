import React from 'react';

const Traditionalcard = ({tf}) => {
    return (
        <div>
            <div className="card w-96 glass">
            <figure><img className='h-64 w-full' src={tf.image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{tf.name}</h2>
                <p>{tf.description}</p>
            </div>
        </div>
        </div>
    );
};

export default Traditionalcard;