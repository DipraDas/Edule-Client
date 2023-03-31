import React, { useEffect, useState } from 'react';
import TuitionCard from './TuitionCard';

const TuitionDetails = () => {

    const [tuitions, setTuitions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tuitions', {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTuitions(data));
    }, [])

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