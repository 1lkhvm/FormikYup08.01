import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import RegisterPage from '../Page/RegisterPage';
import SignUpPage from '../Page/SignUpPage';


const router = createBrowserRouter([
    {
        path: "/register",
        element: <RegisterPage/>,
    },
    {
        path: "/",
        element:<SignUpPage></SignUpPage> ,
    }


]);

export default router