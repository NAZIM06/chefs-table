import React, { useContext, useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { AuthContext } from '../../Provider/AuthProvider';

const Chef = () => {
    const [chef, setChef] = useState([]);
    const {setLoading} = useContext(AuthContext)

    useEffect(() => {
        fetch('https://chefs-table-server-psi.vercel.app/')
            .then(res => res.json())
            .then(data => setChef(data))
            setLoading(false)
    }, [])
    return (

       <>
       <div className='mt-8'>
       <h1 className="text-3xl font-bold mb-4 text-center ">Our Chef's</h1>
       </div>
        <div className='flex flex-wrap justify-center'>
            {
                chef.map(chef => <ChefCard 
                    chef={chef}
                    key={chef.id}
                ></ChefCard>)
            }
        </div>
       </>
    );
};

export default Chef;