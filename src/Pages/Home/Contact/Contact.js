import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail} from "react-icons/hi";
import { HiOutlineLocationMarker} from "react-icons/hi";
import Swal from 'sweetalert2';

const Contact = () => {

    const { register, handleSubmit, reset, formState, } = useForm();

    const handleAddConnects = data => {
        const connectDetails = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
        }
        fetch('http://localhost:5000/connects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(connectDetails)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Message Send Successfully',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ name: '', email: '', subject: '', message: '' });
        }
    }, [formState, reset]);

    return (
        <div className='px-5 md:px-32 mb-20'>
            <div className="container mx-auto border p-5 md:p-16 rounded-2xl">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                    <div className='bg-green-100 p-5 md:p-16 rounded-2xl'>
                        <div className='flex gap-6 items-center border-b-2 pb-10'>
                            <div className='border-2 border-gray-300 p-3 rounded-full '>
                                <div className='bg-white border-2 border-green-400 border-dashed p-4 rounded-full ro'>
                                    <HiOutlinePhone className='text-green-600 text-3xl'></HiOutlinePhone>
                                </div>
                            </div>
                            <div>
                                <p className='text-green-700 tracking-wider font-light'>Phone No.</p>
                                <p className='tracking-wide text-xl mt-1'>  (+880) 01876704498</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center my-10  border-b-2 pb-10'>
                            <div className='border-2 border-gray-300 p-3 rounded-full '>
                                <div className='bg-white border-2 border-green-400 border-dashed p-4 rounded-full ro'>
                                    <HiOutlineMail className='text-green-600 text-3xl'></HiOutlineMail>
                                </div>
                            </div>
                            <div>
                                <p className='text-green-700 tracking-wider font-light'>Email Address.</p>
                                <p className='tracking-wide text-xl mt-1'>dipradas5940@ gmail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div className='border-2 border-gray-300 p-3 rounded-full '>
                                <div className='bg-white border-2 border-green-400 border-dashed p-4 rounded-full ro'>
                                    <HiOutlineLocationMarker className='text-green-600 text-3xl'></HiOutlineLocationMarker>
                                </div>
                            </div>
                            <div>
                                <p className='text-green-700 tracking-wider font-light'>Address</p>
                                <p className='tracking-wide text-xl mt-1'>  Khulshi, Chattogram</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-3/4 mx-auto px-5'>
                        <h1 className='text-4xl font-medium mb-10'>Get in Touch <span className='text-green-600'>With Us</span> </h1>
                        <form className=''
                            onSubmit={handleSubmit(handleAddConnects)}>
                            <div className="form-control mb-6">
                                <input
                                    required
                                    type="text"
                                    className="border py-4 px-7 rounded-lg outline-0 font-light tracking-wider"
                                    placeholder='Name'
                                    {...register("name")}
                                />
                            </div>

                            <div className="form-control mb-6">
                                <input
                                    required
                                    type="email"
                                    className="border py-4 px-7 rounded-lg outline-0 font-light tracking-wider"
                                    placeholder='Email'
                                    {...register("email")}
                                />
                            </div>

                            <div className="form-control mb-6">
                                <input
                                    required
                                    type="text"
                                    className="border py-4 px-7 rounded-lg outline-0 font-light tracking-wider"
                                    placeholder='Subject'
                                    {...register("subject")}
                                />
                            </div>

                            <div className="form-control mb-6">
                                <textarea
                                    required
                                    className='border py-4 px-7 rounded-lg outline-0 font-light tracking-wider'
                                    placeholder='Message'
                                    rows="4"
                                    {...register("message")}
                                ></textarea>
                            </div>

                            <input
                                className='mt-4 tracking-widest shadow-md bg-green-200 border-green-500 text-gray-700 text-xl btn px-4 font-medium rounded-lg w-full hover:text-white'
                                value="Send Message"
                                type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;