import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import { NavLink } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import { Grid } from "@mui/material";
import NewProjectModal from "./components/newProjectModal";

export default function Team() {
    const teamMembers = [];
    return (
        <Grid container spacing={1} justifyContent="center" alignItems="center">
            {teamMembers.length < 1 ? (
                <NewProjectModal />
            ) : (
                teamMembers.map((member) => (
                    <Card
                        key={member.userId}
                        variant="outlined"
                        sx={{ width: 320 }}
                    >
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src={member.profile}
                                    srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                            <IconButton
                                aria-label="Like minimal photography"
                                size="md"
                                variant="solid"
                                sx={{
                                    position: "absolute",
                                    zIndex: 2,
                                    borderRadius: "50%",
                                    right: "1rem",
                                    bottom: 0,
                                    transform: "translateY(50%)",
                                }}
                            >
                                <ChatIcon />
                            </IconButton>
                        </CardOverflow>
                        <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                {member.fullName}
                            </NavLink>
                        </Typography>
                        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                            <NavLink
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <strong>&#183; </strong>&#160; {member.title}
                            </NavLink>
                        </Typography>
                        <Divider inset="context" />
                        <CardOverflow
                            variant="soft"
                            sx={{
                                display: "flex",
                                gap: 1.5,
                                py: 1.5,
                                px: "var(--Card-padding)",
                                bgcolor: "background.level1",
                            }}
                        >
                            <Typography
                                level="body3"
                                sx={{
                                    fontWeight: "md",
                                    color: "text.secondary",
                                }}
                            >
                                6.3k views
                            </Typography>
                            <Divider orientation="vertical" />
                            <Typography
                                level="body3"
                                sx={{
                                    fontWeight: "md",
                                    color: "text.secondary",
                                }}
                            >
                                Active &#183; 1 hour ago
                            </Typography>
                        </CardOverflow>
                    </Card>
                ))
            )}
        </Grid>
    );
}
