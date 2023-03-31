import React from 'react';
import girl from '../../../assets/Images/About/aboutGirl.png';

const About = () => {
    return (
        <div className='container mx-auto px-5 md:px-32 py-20'>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div>
                    <img src={girl} alt="" />
                </div>
                <div>
                    <h3 className='text-green-600 text-lg tracking-wide mb-6'>Welcome to Edule</h3>
                    <h2 style={{lineHeight: '50px'}} className='text-4xl tracking-wide font-medium mb-6'>You can join with Edule and upgrade your skill for your <span className='text-green-600'>bright future.</span> </h2>
                    <p className='text-base font-light tracking-wide'>Lorem Ipsum has been the industr standard dummy text ever since unknown printer took galley type and scmbled make type specimen book. It has survived not only five centuries.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;