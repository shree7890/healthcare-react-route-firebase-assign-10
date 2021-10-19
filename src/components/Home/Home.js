import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Service from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default Home;