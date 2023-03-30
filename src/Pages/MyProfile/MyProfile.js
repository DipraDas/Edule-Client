import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/authprovider/authprovider';
import ProfileDetails from './ProfileDetails';

const MyProfile = () => {

    const { user } = useContext(AuthContext);

    const { data: profile = [], refetch } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProfile?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='container mx-auto px-10'>
            <h1 className='text-4xl font-semibold my-10 text center'>My Profile</h1>
            {
                profile?.map(profile => <ProfileDetails
                    key={profile._id}
                    profile={profile}
                ></ProfileDetails>)
            }
        </div>

    );
};

export default MyProfile;