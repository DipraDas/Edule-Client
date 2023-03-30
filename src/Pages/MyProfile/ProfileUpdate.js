import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/authprovider/authprovider';
import ProfileDetails from './ProfileDetails';

const ProfileUpdate = () => {
    // const storedReview = useLoaderData();
    // console.log(storedReview);
    // const { user } = useContext(AuthContext)

    // const [review, setReview] = useState(storedReview);

    const { user } = useContext(AuthContext);

    // const { data: profile = [], refetch } = useQuery({
    //     queryKey: ['profile'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/myProfile?email=${user?.email}`, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myProfile?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user?.email])



    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...profile }
        newReview[field] = value;
        setProfile(newReview);
    }


    const handleUpdateReview = event => {
        event.preventDefault();
        console.log(profile);
        fetch(`https://localhost:5000/myProfileUpdate/${profile._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                }
            })
    }

    return (
        <div>
            {/* {
            user?.uid &&
            <>
                <h2>Please Update: {storedReview.serviceName}</h2>
                <form onSubmit={handleUpdateReview}>
                    <input onChange={handleInputChange} defaultValue={storedReview.comment} type="text" name='comment' placeholder='review' required />
                    <br />
                    <button type="submit">Update Review</button>
                </form></>
        } */}


                <div className='container mx-auto px-10'>
                    <h1 className='text-4xl font-semibold my-10 text center'>Edit Your Profile</h1>
                    <form onSubmit={handleUpdateReview}>
                        <input onChange={handleInputChange} defaultValue={profile[0]?.email} className='border' type="text" name='name' placeholder={profile[0]?.email} required />
                        <br />
                        <button type="submit">Update</button>
                    </form>
                </div>
        </div>
    );
};

export default ProfileUpdate;