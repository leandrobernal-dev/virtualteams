import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import axios from "axios";
import Cookies from "universal-cookie";
import { API_BASE_URL } from "api/api";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "data/projects/projectSlice";
import { useState } from "react";
import { useEffect } from "react";

export default function NewProjectModal() {
    const projects = useSelector((state) => state.projects.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(projects);
    }, [projects]);

    const [open, setOpen] = React.useState(false);

    const cookies = new Cookies();
    const token = cookies.get("TOKEN");

    const [newProjectTitle, setNewProjectTitle] = useState("");
    const [newProjectDescription, setNewProjectDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const configuration = {
            method: "post",
            url: `${API_BASE_URL}/api/newproject`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: { newProjectTitle, newProjectDescription },
        };

        axios(configuration)
            .then((response) => {
                console.log(response);
                setOpen(false);
                dispatch(
                    addProject([
                        {
                            newProjectTitle: newProjectTitle,
                            newProjectDescription: newProjectDescription,
                        },
                    ])
                );
            })
            .catch((err) => {
                console.log(err);
                setOpen(false);
            });
    }
    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="neutral"
                startDecorator={<Add />}
                onClick={() => setOpen(true)}
            >
                New project
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                    sx={{ maxWidth: 500 }}
                >
                    <Typography id="basic-modal-dialog-title" component="h2">
                        Create new project
                    </Typography>
                    <Typography
                        id="basic-modal-dialog-description"
                        textColor="text.tertiary"
                    >
                        Fill in the information of the project.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    name="new-project-title-input"
                                    autoFocus
                                    required
                                    onChange={(e) => {
                                        setNewProjectTitle(e.target.value);
                                    }}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Input
                                    name="new-project-description-input"
                                    required
                                    onChange={(e) => {
                                        setNewProjectDescription(
                                            e.target.value
                                        );
                                    }}
                                />
                            </FormControl>
                            <Button type="submit">Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}
