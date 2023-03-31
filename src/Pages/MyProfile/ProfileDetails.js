import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = ({ profile }) => {
    const { name, email, role, phone, city, study, location } = profile;
    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 font-light">
                <div className='flex text-xl rounded p-2 shadow-sm'>
                    <h1 className='sm:w-full md:w-2/12'>Name :</h1>
                    <h2> {name}</h2>
                </div>
                <div className='flex text-xl rounded p-2 shadow-sm'>
                    <h1 className='sm:w-full md:w-2/12'>Email :</h1>
                    <h2>{email}</h2>
                </div>
                <div className='flex text-xl rounded p-2 shadow-sm'>
                    <h1 className='sm:w-full md:w-2/12'>Phone :</h1>
                    <h2>{phone}</h2>
                </div>
                <div className='flex text-xl rounded p-2 shadow-sm'>
                    <h1 className='sm:w-full md:w-2/12'>City :</h1>
                    <h2>{city}</h2>
                </div>
                <div className='flex text-xl rounded p-2 shadow-sm'>
                    <h1 className='sm:w-full md:w-2/12'>Study :</h1>
                    <h2>{study}</h2>
                </div>
                <div className='flex text-xl rounded p-2 shadow-sm'>
                    <h1 className='sm:w-full md:w-2/12'>Location :</h1>
                    <h2>{location}</h2>
                </div>
                <div className='flex text-xl  rounded p-2 shadow-sm'>
                    <h1 className='sm:w-full md:w-2/12'>Role :</h1>
                    <h2>{role.charAt(0).toUpperCase() + role.slice(1)}</h2>
                </div>
            </div>
            <Link to={`/profileUpdate`} className="btn bg-green-700 tracking-wider mt-5 mb-10">Edit my profile</Link>
        </div>
    );
};

export default ProfileDetails;