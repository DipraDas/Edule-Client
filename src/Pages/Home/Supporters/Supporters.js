import React from 'react';
import u1 from '../../../assets/Images/Home/u1.png';
import u2 from '../../../assets/Images/Home/u2.png';
import u3 from '../../../assets/Images/Home/u3.png';
import u4 from '../../../assets/Images/Home/u4.png';
import u5 from '../../../assets/Images/Home/u5.png';
import supporter from '../../../assets/Images/Home/supporter.png';
import './Supporters.css';

const Supporters = () => {
    return (
        <div className='px-5 md:px-32 mb-20 '>
            <div className="container mx-auto bg-green-50 px-5 md:px-32 py-16 rounded-2xl">
                <div className='flex items-center gap-16 mb-10'>
                    <h1 className='text-4xl tracking-wide'>Best Supporters of <span className='text-green-600'>Edule</span> </h1>
                    <img className='animee hidden md:block' src={supporter} alt="" />
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <img className='mx-auto py-5' src={u5} alt="" />
                    <img className='mx-auto py-5' src={u2} alt="" />
                    <img className='mx-auto py-5' src={u3} alt="" />
                    <img className='mx-auto py-5' src={u4} alt="" />
                    <img className='mx-auto py-5' src={u1} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Supporters;