import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Cookies from "universal-cookie";

const Auth = () => {
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        {token ? (
                            <Navigate to={"/app/dashboard"} replace={true} />
                        ) : (
                            <Navigate to={"login"} replace={true} />
                        )}
                    </>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/logout"
                element={
                    <>
                        {cookies.remove("TOKEN", { path: "/" })}
                        <Navigate to={"/auth"} replace={true} />
                    </>
                }
            />
            <Route
                path="*"
                element={<Navigate to={"/page-not-found"} replace={true} />}
            />
        </Routes>
    );
};

export default Auth;
