import React, { useState } from "react";
import axios from "axios";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import LoginIcon from "@mui/icons-material/Login";
import Cookies from "universal-cookie";
import { API_BASE_URL } from "api/api";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
    const [email, setUsername] = useState("bernalleandro.dev@gmail.com");
    const [password, setPassword] = useState("123456789");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(!loading);

        axios
            .post(`${API_BASE_URL}/auth/login`, { email, password })
            .then((response) => {
                const cookies = new Cookies();
                cookies.set("TOKEN", response.data.token, { path: "/" });
                window.location.href = "/app/dashboard";
            })
            .catch((error) => {
                setLoading((oldState) => (!oldState));
                const errorMsg = error.response.data.message;
                console.log(errorMsg);
                setErrorMessage(errorMsg);
            });
    };

    return (
        <main>
            <Sheet
                sx={{
                    width: 300,
                    mx: "auto", // margin left & right
                    my: 4, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    borderRadius: "sm",
                    boxShadow: "md",
                }}
                variant="outlined"
            >
                <div>
                    <Typography level="h4" component="h1">
                        <b>Welcome!</b>
                    </Typography>
                    <Typography level="body2">Sign in to continue.</Typography>
                </div>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        // html input attribute
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        defaultValue={"bernalleandro.dev@gmail.com"}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                        // html input attribute
                        name="password"
                        type="password"
                        placeholder="password"
                        defaultValue={"a8cjql9_dh8"}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </FormControl>
                <Typography
                    id="outlined-error"
                    label="Error"
                    sx={{ color: "red" }}
                >
                    {errorMessage}
                </Typography>

                <LoadingButton
                    onClick={handleLogin}
                    endIcon={<LoginIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    <span>Log in</span>
                </LoadingButton>
                <Typography
                    endDecorator={<Link href="register">Sign up</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: "center" }}
                >
                    Don&apos;t have an account?
                </Typography>
            </Sheet>
        </main>
    );
};

export default Login;
