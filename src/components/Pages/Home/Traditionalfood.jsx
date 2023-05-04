import React, { useContext, useEffect, useState } from 'react';

import Traditionalcard from './Traditionalcard';
import { AuthContext } from '../../Provider/AuthProvider';

const Traditionalfood = () => {
    const [traditionalFood, setTraditionalFood] = useState([]);
    const { setLoading } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://chefs-table-server-psi.vercel.app/traditionalFood')
            .then(res => res.json())
            .then(data => setTraditionalFood(data))
        setLoading(false)
    }, [])

    return (
        <div className='w-full my-20'>
            <p className='mb-12 text-2xl text-center font-bold'>Our Traditional Foods</p>
            <div className="flex flex-wrap justify-center">
                {
                    traditionalFood.map(tf => <Traditionalcard
                        tf={tf}
                        key={tf.id}
                    ></Traditionalcard>)
                }
            </div>
        </div>
    );
};

export default Traditionalfood;