import React, { useState } from "react";
import axios from "axios";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Cookies from "universal-cookie";
import { API_BASE_URL } from "api/api";

const Register = () => {
    const [email, setUsername] = useState("bernalleandro.dev@gmail.com");
    const [password, setPassword] = useState("123456789");

    const handleRegister = () => {
        axios
            .post(`${API_BASE_URL}/auth/register`, { email, password })
            .then((response) => {
                const cookies = new Cookies();
                cookies.set("TOKEN", response.data.token, { path: "/" });
                window.location.href = "/app/dashboard";
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <CssVarsProvider>
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
                        <Typography level="body2">
                            Sign in to continue.
                        </Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            // html input attribute
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
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
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </FormControl>

                    <Button
                        onClick={handleRegister}
                        sx={{ mt: 1 /* margin top */ }}
                    >
                        Register
                    </Button>
                    <Typography
                        endDecorator={<Link href="login">login</Link>}
                        fontSize="sm"
                        sx={{ alignSelf: "center" }}
                    >
                        Already have an account?
                    </Typography>
                </Sheet>
            </main>
        </CssVarsProvider>
    );
};

export default Register;
