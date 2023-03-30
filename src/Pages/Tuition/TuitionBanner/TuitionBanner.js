import React from 'react';
import './TuitionBanner.css';
import glass from '../../../assets/Images/Shared/glass.png';

const TuitionBanner = () => {
    return (
        <div className='tuitionBanner'>
            <h1 className='text-7xl tracking-widest text-white font-semibold'>Tuitions</h1>
            <img src={glass} alt="" />
        </div>
    );
};

export default TuitionBanner;