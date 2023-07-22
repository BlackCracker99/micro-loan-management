import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/novaContextProvider";
import novaAxiosClient from "../config/novaAxiosClient";
import NovaSideBar from "./sub-components/NovaSideBar";
import NovaNavBar from "./sub-components/NovaNavBar";

export default function DefaultLayout() {
    const { user, token, setUser, setToken, notification } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }

    

    useEffect(() => {
        novaAxiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

    return (
        <div id="defaultLayout">
            {/* nav bar */}
            <NovaNavBar user={{username:user.name , email:user.email}} />

            {/* sidebar */}
            <NovaSideBar />
            
            <div class="sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <Outlet />
                </div>
            </div>

            {/* <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        {user.name}
                        <a onClick={onLogout} className="btn-logout" href="#">
                            Logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
                {notification && (
                    <div className="notification">{notification}</div>
                )}
            </div> */}
        </div>
    );
}
