import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/shared/Loading/Loading';
import { AuthContext } from '../../context/authprovider/authprovider';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;