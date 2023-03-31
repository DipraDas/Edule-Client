import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/authprovider/authprovider';
import ProfileDetails from './ProfileDetails';
import useTitle from '../../hooks/useTitle';
import Loading from '../../components/shared/Loading/Loading';

const MyProfile = () => {
    useTitle("Profile");
    const { user } = useContext(AuthContext);

    const { data: profile = [], isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await fetch(`https://edule-server.vercel.app/myProfile?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }

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