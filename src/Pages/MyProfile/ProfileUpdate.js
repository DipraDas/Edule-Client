import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../../context/authprovider/authprovider';
import useTitle from '../../hooks/useTitle';

const ProfileUpdate = () => {
    useTitle("Update Profile");
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { data: profile = [] } = useQuery({
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

    const myprofile = profile[0];

    const updateprofile = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const city = form.city.value;
        const study = form.study.value;

        const profile = { name, location, phone, city, study };
        console.log(profile);
        fetch(`https://edule-server.vercel.app/myProfileUpdate/${user?.email}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(profile),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Profile Updated Successfully",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    console.log(data);
                }
                console.log(data);
            });
        navigate('/')
    };

    return (
        <div className='px-5'>
            <div className="w-full md:w-5/12 my-20 mx-auto shadow">
                <form onSubmit={updateprofile} className="py-16 px-5 md:px-20">
                    <h1 className="text-3xl mb-5 font-semibold">
                        Update Information
                    </h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder={myprofile.name}
                            className="input input-bordered"
                            defaultValue={myprofile.name}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            name="phone"
                            type="text"
                            placeholder={myprofile.phone}
                            className="input input-bordered"
                            defaultValue={myprofile.phone}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Study</span>
                        </label>
                        <input
                            name="study"
                            type="text"
                            placeholder={myprofile.study}
                            className="input input-bordered"
                            defaultValue={myprofile.study}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            name="location"
                            type="text"
                            placeholder={myprofile.location}
                            className="input input-bordered"
                            defaultValue={myprofile.location}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <input
                            name="city"
                            type="text"
                            placeholder={myprofile.city}
                            className="input input-bordered"
                            defaultValue={myprofile.city}
                            required
                        />
                    </div>

                    <div className="text-start mt-2">
                        <button className="btn mt-5">
                            Update Info
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;