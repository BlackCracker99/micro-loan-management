import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Register from "./views/Register";
import DefaultLayout from './layouts/DefaultLayout'
import GuestLayout from './layouts/GuestLayout'
import Dashboard from "./views/Dashboard";
import AdminUsers from "./views/AdminUsers";
import LoanApplications from "./views/LoanApplications";
import UserForm from "./views/UserForm";
import LoanTypes from "./views/LoanTypes";
import LoanPlans from "./views/LoanPlans";
import Payments from "./views/Payments";
import Villages from "./views/Villages";
import Groups from "./views/Groups";



const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/loan-applications",
                element: <LoanApplications />,
            },
            {
                path: "/loan-types",
                element: <LoanTypes />,
            },
            {
                path: "/loan-plans",
                element: <LoanPlans />,
            },
            {
                path: "/payments",
                element: <Payments />,
            },
            {
                path: "/villages",
                element: <Villages />,
            },
            {
                path: "/groups",
                element: <Groups />,
            },
            {
                path: "/users",
                element: <AdminUsers />,
            },
            {
                path: "/users/new",
                element: <UserForm />,
            },
            {
                path: "/users/:id",
                element: <UserForm />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
