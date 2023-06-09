import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppViews from "./app";
import Auth from "./auth";
import Cookies from "universal-cookie";

const Views = () => {
    // This is where to check whether a user is authenticated or not
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");

    return (
        <Routes>
            <Route path="/" element={<a href="/app/dashboard">Dashboard</a>} />
            <Route path="/about" element={<a href="/">Home</a>} />

            <Route
                path="/app/*"
                element={
                    <>
                        {token ? (
                            <AppViews />
                        ) : (
                            <Navigate to={"/auth"} replace={true} />
                        )}
                    </>
                }
            />
            <Route
                path="/auth/*"
                element={
                    <Routes>
                        <Route path="/*" element={<Auth />} />

                        <Route
                            path="*"
                            element={
                                <Navigate
                                    to={"/page-not-found"}
                                    replace={true}
                                />
                            }
                        />
                    </Routes>
                }
            />
            <Route
                path="*"
                element={<Navigate to={"/page-not-found"} replace={true} />}
            />
        </Routes>
    );
};

export default Views;
