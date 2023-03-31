import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import AddTuition from "../../Pages/AddTuition/AddTuition";
import AllApplications from "../../Pages/AllApplications/AllApplications";
import HomeComponents from "../../Pages/Home/HomeComponents/HomeComponents";
import SignIn from "../../Pages/Login/SignIn/SignIn";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import MyProfile from "../../Pages/MyProfile/MyProfile";
import ProfileUpdate from "../../Pages/MyProfile/ProfileUpdate";
import SpecificTuition from "../../Pages/Tuition/SpecificTuition/SpecificTuition";
import TuitionComponents from "../../Pages/Tuition/TuitionComponents/TuitionComponents";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeComponents></HomeComponents>
            },
            {
                path: '/tuitions',
                element: <PrivateRoutes><TuitionComponents></TuitionComponents></PrivateRoutes>
            },
            {
                path: '/myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/addTuition',
                element: <PrivateRoutes><AddTuition></AddTuition></PrivateRoutes>
            },
            {
                path: '/allApplications',
                element: <PrivateRoutes><AllApplications></AllApplications></PrivateRoutes>
            },
            {
                path: '/specificTuition/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/specificTuition/${params.id}`),
                element: <PrivateRoutes><SpecificTuition></SpecificTuition></PrivateRoutes>
            },
            {
                path: '/profileUpdate',
                element: <ProfileUpdate></ProfileUpdate>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
        ]
    }
])

export default router;