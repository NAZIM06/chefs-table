import React from 'react';
import Banner from './Banner';
import Chef from './Chef';
import Traditionalfood from './Traditionalfood';

const Home = () => {
    return (<>
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Traditionalfood></Traditionalfood>
        </div>
        </>
    );
};

export default Home;