import React from 'react';

import Hero from "../components/Hero";
import Carousel from '../components/Carousel';

function HomePage({ title, subTitle, catchPhrase }) {
    return (
        <div>
            <Hero title={title} subTitle={subTitle} catchPhrase={catchPhrase} />
            <Carousel />
        </div>
    );
}

export default HomePage;