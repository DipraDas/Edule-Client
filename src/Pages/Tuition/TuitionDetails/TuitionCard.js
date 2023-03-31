import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/authprovider/authprovider';
import useStudent from '../../../hooks/useStudent/useStudent';
import useTutor from '../../../hooks/useTutor/useTutor';
import './TuitionCard.css';

const TuitionCard = ({ tuition }) => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const [isTutor] = useTutor(user?.email);
    const [isStudent] = useStudent(user?.email);
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allApplications', {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setApplicants(data))
    }, [])

    const { _id, subject, whichClass, weeklydays, salary, location, phone, postedOn, name } = tuition;

    const applicantsNumber = applicants?.filter(applicant => applicant.subjectId === _id).length;

    const confirmationModal = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to cancle the application!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Apply Now'
        }).then((result) => {
            if (result.isConfirmed) {
                handleApply();
            }
        })
    }

    const handleApply = () => {
        const email = user?.email;
        const name = user?.displayName;
        const applicantsDetails = {
            subjectId: _id,
            name: name,
            email: email,
            subject: subject,
            salary: salary
        }
        fetch('http://localhost:5000/applicants', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(applicantsDetails)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Applied Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate('/');
            })
    }

    return (
        <div div className='relative'>
            <div className='tuitionCard shadow-md grid sm:grid-cols-1 md:grid-cols-2 items-center '>
                <div>
                    <h1 className='text-3xl'> {subject}</h1>
                    <div style={{ width: '170px', height: '2px', backgroundColor: '#72937c', margin: '8px 0' }}></div>
                    <h1 className='text-xl mt-4'>Class : {whichClass}</h1>
                    <h1 className='text-xl mt-2'>Weekly : {weeklydays} days</h1>
                    <h1 className='text-xl mt-2'>Location : {location}</h1>
                    <div className='hidden md:block'>
                        {
                            isTutor &&
                            <div onClick={confirmationModal} className="btn mt-3 tracking-wider">Apply Now</div>
                        }
                    </div>
                    <div className='hidden md:block'>
                        {
                            isStudent && applicantsNumber > 0 &&
                            <Link to={`/specificTuition/${_id}`} className="btn  bg-blue-600 border-blue-900 mt-3 tracking-wider hover:text-blue-400 ">View {applicantsNumber} Applicants</Link>
                        }
                    </div>
                    <div className='hidden md:block'>
                        {
                            isStudent && applicantsNumber === 0 &&
                            <div className="btn mt-3 tracking-wider">No Applicants</div>
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mt-4'>Posted By : {name}</h1>
                    <h1 className='text-xl mt-2'>Posted On : {postedOn}</h1>
                    <h1 className='text-xl mt-2'>Contact : {phone}</h1>
                </div>
                <div className='sm:hidden'>
                    {
                        isTutor &&
                        <div onClick={confirmationModal} className="btn mt-3 tracking-wider">Apply Now</div>
                    }
                </div>
                <div className='sm:hidden'>
                    {
                        isStudent && applicantsNumber > 0 &&
                        <Link to={`/specificTuition/${_id}`} className="btn mt-3 tracking-wider">{applicantsNumber} Applicants</Link>
                    }
                </div>
                <div className='sm:hidden'>
                    {
                        isStudent && applicantsNumber === 0 &&
                        <div className="btn mt-3 tracking-wider">No Applicants</div>
                    }
                </div>
            </div>
            <div className='absolute right-10 top-0 bg-green-800 pt-2 pb-2 px-6 rounded-b-xl text-white font-semibold'>
                <h1 className='text-xl'>&#x9F3; {salary}</h1>
            </div>
        </div>
    );
};

export default TuitionCard;