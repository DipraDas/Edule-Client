import React, { useEffect } from 'react';
import './TuitionBanner.css';
import glass from '../../../assets/Images/Shared/glass.png';

const TuitionBanner = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='tuitionBanner'>
            <h1 className='text-7xl tracking-widest text-white font-semibold'>Tuitions</h1>
            <img src={glass} alt="" />
        </div>
    );
};

export default TuitionBanner;