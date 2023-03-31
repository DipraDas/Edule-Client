import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import HomeBanner from '../HomeBanner/HomeBanner';
import Supporters from '../Supporters/Supporters';
import Testimonial from '../Testimonial/Testimonial';


const HomeComponents = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <About></About>
            <Testimonial></Testimonial>
            <Supporters></Supporters>
            <Contact></Contact>
        </>
    );
};

export default HomeComponents;