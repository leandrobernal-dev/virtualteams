import React from "react";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import { styled, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";

import AppNav from "./components/nav";
import SideBar from "./components/sideBar";
import Team from "./team";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { API_BASE_URL } from "api/api";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "data/projects/projectSlice";

const cookies = new Cookies();

const drawerWidth = 260;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(1, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Dashboard() {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
    });
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    const token = cookies.get("TOKEN");
    useEffect(() => {
        const configuration = {
            method: "get",
            url: `${API_BASE_URL}/api`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios(configuration)
            .then((response) => {
                console.log(response);
                dispatch(addProject(response.data.projects));
            })
            .catch((error) => {
                console.log(error);
                cookies.remove("TOKEN", { path: "/" });
                error = new Error("Please Log In");
                window.location.href = "/auth";
            });
    }, [token]);

    return (
        <Box sx={{ display: "flex" }}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <CssBaseline />
                            <AppNav
                                handleDrawerOpen={handleDrawerOpen}
                                open={open}
                                AppBar={AppBar}
                            />

                            <SideBar
                                DrawerHeader={DrawerHeader}
                                drawerWidth={drawerWidth}
                                handleDrawerClose={handleDrawerClose}
                                open={open}
                                theme={theme}
                                Drawer={Drawer}
                            />
                            <Outlet />
                        </>
                    }
                >
                    <Route
                        path=""
                        element={<Navigate to={"team"} replace={true} />}
                    />
                    <Route
                        path={`*`}
                        element={
                            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                                <DrawerHeader />
                                <Routes>
                                    <Route
                                        path=""
                                        element={
                                            <Navigate
                                                to={"team"}
                                                replace={true}
                                            />
                                        }
                                    />
                                    <Route path="team/*" element={<Team />} />
                                    <Route path="meeting" element={<Team />} />

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
                            </Box>
                        }
                    />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to={"/page-not-found"} replace={true} />}
                />
            </Routes>
        </Box>
    );
}
