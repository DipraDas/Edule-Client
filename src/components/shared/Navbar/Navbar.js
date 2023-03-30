import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/Shared/logo.png';
import { AuthContext } from '../../../context/authprovider/authprovider';
import useStudent from '../../../hooks/useStudent/useStudent';
import useTutor from '../../../hooks/useTutor/useTutor';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isStudent] = useStudent(user?.email);
    const [isTutor] = useTutor(user?.email);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    return (
        <div className='shadow-md'>
            <div className='container mx-auto px-3'>
                <div className="navbar bg-base-100 py-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link> </li>
                                <li><Link to="/tuitions">All Tuition</Link> </li>
                                {
                                    user?.email &&
                                    <>
                                        {
                                            isStudent &&
                                            <>
                                                <li><Link to="/addTuition">Add Tuition</Link> </li>
                                            </>
                                        }
                                    </>
                                }
                                {
                                    user?.email &&
                                    <>
                                        {
                                            isTutor &&
                                            <>
                                                <li><Link to="/allApplications">All Application</Link> </li>
                                            </>
                                        }
                                    </>
                                }
                                {user?.uid && <li><Link to="/myProfile">My Profile</Link> </li>}
                            </ul>
                        </div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link> </li>
                            <li><Link to="/tuitions">All Tuition</Link> </li>
                            {
                                user?.email &&
                                <>
                                    {
                                        isStudent &&
                                        <>
                                            <li><Link to="/addTuition">Add Tuition</Link> </li>
                                        </>
                                    }
                                </>
                            }
                            {
                                user?.email &&
                                <>
                                    {
                                        isTutor &&
                                        <>
                                            <li><Link to="/allApplications">All Application</Link> </li>
                                        </>
                                    }
                                </>
                            }
                            {user?.uid && <li><Link to="/myProfile">My Profile</Link> </li>}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user?.email ?
                            <div className="btn" onClick={handleLogOut}>Log Out</div> :
                            <Link to="/login" className="btn">Log In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;