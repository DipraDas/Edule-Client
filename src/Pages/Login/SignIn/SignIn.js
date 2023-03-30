import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import girl from '../../../assets/Images/Authentication/girl.png';
import { AuthContext } from '../../../context/authprovider/authprovider';
import useToken from '../../../hooks/useToken/useToken';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [LoginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(LoginUserEmail);
    const user = useContext(AuthContext);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, token, navigate])

    if (user?.email) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginUserEmail('');
        setLoginError('')
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
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
                            <div className='w-96 px-7 border-purple-300 my-20 py-16'>
                                <div style={{ fontFamily: 'Mukta' }} className="tracking-wider text-3xl font-semibold">Login <span className='text-green-500'>Now !</span> </div>
                                <div className='text-xs mt-1 mb-3'>New in Edule?<Link className='text-blue-500 font-semibold' to="/register"> Sign Up</Link></div>
                                <form className='font-light' onSubmit={handleSubmit(handleLogin)}>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" className="input input-bordered w-full " placeholder='Enter your Email'
                                            {...register("email", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" className="input input-bordered w-full " placeholder='Enter your Password'
                                            {...register("password", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <input className='btn btn-accent my-5 w-full' value="Log In" type="submit" />
                                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default SignIn;