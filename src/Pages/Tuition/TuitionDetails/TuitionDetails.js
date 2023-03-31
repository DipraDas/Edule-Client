import React, { useEffect, useState } from 'react';
import TuitionCard from './TuitionCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/shared/Loading/Loading';

const TuitionDetails = () => {

    const { data: tuitions = [], isLoading } = useQuery({
        queryKey: ['tuitions'],
        queryFn: async () => {
            const res = await fetch('https://edule-server.vercel.app/tuitions', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className='container mx-auto p-5 py-20'>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10">
                {
                    tuitions?.map(tuition => <TuitionCard
                        key={tuition._id}
                        tuition={tuition}
                    ></TuitionCard>)
                }
            </div>
        </div>
    );
};

export default TuitionDetails;