import React, { useEffect } from "react";
import { useStateContext } from "../context/novaContextProvider";
import { Link, Navigate, Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SideNavigationBar from "../components/Sidebar";
import FooterBar from "../components/Footer";

export default function DefaultLayout() {
    const { user, token, setUser, setToken, notification } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <SideNavigationBar></SideNavigationBar>

                <div
                    class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90"
                    id="sidebarBackdrop"
                ></div>
            </div>

            <div
                id="main-content"
                class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
            >
                <main>
                    <div class="px-4 pt-6">
                        <Outlet />
                    </div>
                </main>
                <FooterBar></FooterBar>
            </div>
        </div>
    );
}
