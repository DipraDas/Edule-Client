import React, { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AllApplications = () => {
    useTitle("All Applications");
    const [applicants, setApplicants] = useState([]);
    useEffect(() => {
        fetch('https://edule-server.vercel.app/allApplications', {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setApplicants(data))
    }, [])

    return (
        <div className='container mx-auto px-5 py-20'>
            <h1 className='text-4xl text-center font-semibold tracking-wider mb-10'>All Applications</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Applicant's Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicants.map((applicant, i) => <>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{applicant.name}</td>
                                    <td>{applicant.email}</td>
                                    <td>{applicant.subject}</td>
                                    <td>&#x9F3; {applicant.salary}</td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllApplications;