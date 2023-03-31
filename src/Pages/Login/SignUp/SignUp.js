import React, { useContext, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/authprovider/authprovider';
import girl from '../../../assets/Images/Authentication/girl.png';
import Swal from 'sweetalert2';
import useToken from '../../../hooks/useToken/useToken';

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, control } = useForm();
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const password = useWatch({ control, name: "password" });
    const confirmPassword = useWatch({ control, name: "confirmPassword" });
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (
            password !== undefined &&
            password !== "" &&
            confirmPassword !== undefined &&
            confirmPassword !== "" &&
            password === confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [password, confirmPassword]);

    if (token) {
        navigate('/');
        window.location.reload(true);
    }

    const handleSignUp = data => {
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message);
            })
    }


    const saveUser = (name, email, role) => {
        const user = {
            name,
            email,
            role,
            location: '',
            phone: '',
            city: '',
            study: ''
        };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    }

    return (
        <div className='px-20'>
            <div className="container mx-auto border my-20 rounded-3xl ">
                <div className="grid grid-cols-2 gap-4 justify-center items-center py-20" >
                    <div>
                        <img className='mx-auto rounded-2xl bg-green-100 pt-8 px-10' src={girl} alt="" />
                    </div>
                    <div>
                        <div className='flex justify-center items-center'>
                            <div className='w-96'>
                                <div style={{ fontFamily: 'Mukta' }} className="tracking-wider text-3xl font-semibold">Registration <span className='text-green-600'>Now!</span> </div>
                                <div className='text-xs mt-1 mb-3'>Already Registered?<Link className='text-blue-500 font-semibold' to="/login"> Login</Link></div>
                                <form className='font-light' onSubmit={handleSubmit(handleSignUp)}>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" className="input input-bordered w-full" placeholder='Enter Your Name'
                                            {...register("name", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" className="input input-bordered w-full" placeholder='Enter Your Email'
                                            {...register("email", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" className="input input-bordered w-full" placeholder='Enter Your Password'
                                            {...register("password", {
                                                required: true
                                            })}
                                        />
                                    </div>

                                    <div className='flex flex-col items-start'>
                                        <label className='label' htmlFor='confirm-password'>
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input
                                            type='password'
                                            className="input input-bordered w-full" placeholder='ReType Your password'
                                            {...register("confirmPassword", {
                                                required: true
                                            })}
                                        />
                                    </div>


                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-normal">Who are you?</span>
                                        </label>
                                        <select className="select select-bordered w-full"
                                            {...register("role", {
                                                required: true
                                            })}
                                        >
                                            <option className='' default value="student">Student</option>
                                            <option className='' value="tutor">Tutor</option>
                                        </select>
                                    </div>
                                    <input className='btn bg-green-600 text-white border-0 mt-5 mb-2 w-full duration-500' value="Sign Up" type="submit" disabled={disabled} />
                                    <p className='text-xs text-red-600'>Sign Up button will active after matching Password and Confirm Password</p>
                                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                                    {signupError && <p className='text-red-600'>{signupError}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default SignUp;