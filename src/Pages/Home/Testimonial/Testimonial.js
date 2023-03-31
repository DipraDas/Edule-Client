import React from 'react';
import girl1 from '../../../assets/Images/Home/girl1.jpg';
import girl2 from '../../../assets/Images/Home/girl2.png';
import { FaStar } from "react-icons/fa";
import glass from '../../../assets/Images/Shared/glass.png';

const Testimonial = () => {
    return (
        <>
            <div className="container mx-auto px-5 md:px-32 py-20">
                <h3 className='text-center text-green-600 mb-5 text-lg tracking-wider'>Student Testimonila</h3>
                <h2 className='font-medium tracking-widest mb-5 text-center text-4xl'>Feedback From <span className='text-green-600'>Student</span> </h2>
                <img className='mx-auto mb-10' src={glass} alt="" />
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                    <div className='text-center border py-10 px-5 md:px-20 rounded-xl shadow'>
                        <img className='mx-auto w-24 rounded-full p-2 border' src={girl1} alt="" />
                        <div className='flex justify-center py-3 gap-1'>
                            <div className='text-sm text-orange-400'><FaStar></FaStar></div>
                            <div className='text-sm text-orange-400'><FaStar></FaStar></div>
                            <div className='text-sm text-orange-400'><FaStar></FaStar></div>
                            <div className='text-sm text-orange-400'><FaStar></FaStar></div>
                            <div className='text-sm text-gray-400'><FaStar></FaStar></div>
                        </div>
                        <p className='leading-7 mt-5 text-gray-500 font-light tracking-wide'> Dolorum asperiores eveniet nesciunt dolorem itaque, quisquam ut, doloremque cumque impedit earum veritatis mollitia alias id. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p className='text-xl font-medium mt-6 mb-1'>Melissa Roberts</p>
                        <p className='text-sm text-green-500'>Product Designer, USA</p>
                    </div>
                    <div className='text-center border py-10 px-5 md:px-2 rounded-xl shadow'>
                        <img className='mx-auto w-24 rounded-full p-2 border' src={girl2} alt="" />
                        <div className='flex justify-center py-3 gap-1'>
                            <div className='text-sm text-orange-400'><FaStar></FaStar></div>
                            <div className='text-sm text-orange-400'><FaStar></FaStar></div>
                            <div className='text-sm text-orange-400'><FaStar></FaStar></div>
                            <div className='text-sm text-gray-400'><FaStar></FaStar></div>
                            <div className='text-sm text-gray-400'><FaStar></FaStar></div>
                        </div>
                        <p className='leading-7 mt-5 text-gray-500 font-light tracking-wide'>Sit amet, consectetur adipisicing elit lorem ipsum dolor. Dolorum asperiores eveniet nesciunt dolorem itaque, quisquam ut, doloremque cumque impedit earum veritatis mollitia alias id.</p>
                        <p className='text-xl font-medium mt-6 mb-1'>Sara Alexandar</p>
                        <p className='text-sm text-green-500'>Product Manager, UK</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;