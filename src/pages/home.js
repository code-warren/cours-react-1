import React from 'react';
import Countries from '../components/Countries';
import Navigation from '../components/Navigation';
import Logo from '../components/logo';

const Home = () => {
    return (
        <div className="Countries">
            <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;