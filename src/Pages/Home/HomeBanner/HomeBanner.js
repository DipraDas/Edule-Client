import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import girl from '../../../assets/Images/Home/bannerGirl.png';
import rotation from '../../../assets/Images/Home/circle.png';
import './HomeBanner.css';

const HomeBanner = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='bg-green-50 pt-20'>
            <div className="container mx-auto px-5 md:px-32 relative">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className='animate__animated  animate__fadeInDown'>
                        <h4 className='text-green-600 font-medium mb-6 text-xl'>Start Your Favourite Subject</h4>
                        <h1 style={{ lineHeight: '65px' }} className='text-5xl mb-6'>Now learning from anywhere, and build your <span className='text-green-600'> bright career.</span> </h1>
                        <h2 className='mb-6 font-extralight text-xl tracking-wider '>It has survived not only five centuries but also the leap into electronic typesetting.</h2>
                        <Link to="/tuitions" className='btn bg-green-700 tracking-widest'>See Tutions</Link>
                    </div>
                    <div className='animate__animated animate__fadeInUp'>
                        <img src={girl} alt="" />
                    </div>
                </div>
                <div>
                    <img src={rotation} className='absolute -top-10 left-10 anime hidden md:block' alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default HomeBanner;