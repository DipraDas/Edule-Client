import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/authprovider/authprovider';
import './AddTuition.css';

const AddTuition = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    let whichClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let weeklyDays = [3, 4, 5];

    const handleAddBlog = data => {
        const today = format(new Date(), 'PP');
        const email = user?.email;
        const name = user?.displayName;
        const blogDetails = {
            subject: data.subject,
            whichClass: data.whichClass,
            weeklydays: data.weeklydays,
            salary: data.salary,
            location: data.location,
            phone: data.phone,
            email: email,
            postedOn: today,
            name:name
        }
        fetch('http://localhost:5000/tuitions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(blogDetails)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tuition Added Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate('/tuitions');
            })
    }

    return (
        <div className="addTuition">
            <div className='container mx-auto px-5 pb-20'>
                <div className='pt-4 sm:full md:w-2/4 mx-auto'>
                    <h1 className="pt-10 pb-10 text-4xl font-semibold text-center">
                        Add New Tuition
                    </h1>
                    <form
                        className='rounded border border-gray-300 p-6 md:p-16 shadow-xl mb-10'
                        onSubmit={handleSubmit(handleAddBlog)}>

                        <div className="form-control m-0 mb-3">
                            <label className="label">
                                <span className="label-text text-lg">Subject</span>
                            </label>
                            <input
                                type="text"
                                className="border p-2 shadow-sm outline-0 "
                                placeholder='Enter Your Subject'
                                {...register("subject")}
                            />
                        </div>

                        <div className="form-control m-0 mb-3">
                            <label className="label">
                                <span className="label-text text-lg">Class</span>
                            </label>
                            <select
                                {...register('whichClass')}
                                style={{ padding: '10px' }} id="inputState" class="form-control mb-3 border p-2 shadow-sm outline-0">
                                <option className='' default value="1">Select Any One</option>
                                {
                                    whichClass.map(classs => <option>{classs}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-control m-0 mb-3">
                            <label className="label">
                                <span className="label-text text-lg">Weekly Days</span>
                            </label>
                            <select
                                {...register('weeklydays')}
                                style={{ padding: '10px' }} id="inputState" class="form-control mb-3 border p-2 shadow-sm outline-0">
                                <option className='' default value="1">Select Any One</option>
                                {
                                    weeklyDays.map(weeklyDay => <option>{weeklyDay}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-control m-0 mb-3">
                            <label className="label">
                                <span className="label-text text-lg">Salary</span>
                            </label>
                            <input
                                type="text"
                                className="border p-2 shadow-sm outline-0"
                                placeholder='Enter Honour Amount'
                                {...register("salary")}
                            />
                        </div>

                        <div className="form-control m-0 mb-3">
                            <label className="label">
                                <span className="label-text text-lg">Location</span>
                            </label>
                            <input
                                type="text"
                                className="border p-2 shadow-sm outline-0"
                                placeholder='Enter Your Location'
                                {...register("location")}
                            />
                        </div>

                        <div className="form-control m-0 mb-3">
                            <label className="label">
                                <span className="label-text text-lg">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                className="border p-2 shadow-sm outline-0"
                                placeholder='Enter Your Phone Number'
                                {...register("phone")}
                            />
                        </div>

                        <input
                            className='mt-4 tracking-widest bg-green-700 btn px-4 py-2 rounded'
                            value="Add Tuition"
                            type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTuition;