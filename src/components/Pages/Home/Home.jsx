import React from 'react';
import Banner from './Banner';
import Chef from './Chef';
import Traditionalfood from './Traditionalfood';
import Extrasection from './Extrasection.jsx';

const Home = () => {
    return (<>
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Traditionalfood></Traditionalfood>
            <Extrasection></Extrasection>
        </div>
        </>
    );
};

export default Home;