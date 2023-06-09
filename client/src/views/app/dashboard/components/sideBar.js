import * as React from "react";
import { NavLink } from "react-router-dom";

import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Typography,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { sideBarLinks } from "config/navigationConfig";

export default function SideBar({
    open,
    DrawerHeader,
    handleDrawerClose,
    theme,
    Drawer,
}) {
    return (
        <Drawer
            variant="permanent"
            open={open}
            style={{ zIndex: 0 }}
            className="side-bar-container"
        >
            <DrawerHeader sx={{ boxShadow: "1px 0 10px rgba(0, 0, 0, 0.33)" }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: {
                            md: "flex",
                            justifyContent: "center",
                        },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        width: "100%",
                    }}
                >
                    <AdbIcon sx={{ mr: 1 }} />
                    LOGO
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List
                className="sidebar-link-list"
                sx={{
                    overflowY: "scroll",
                }}
            >
                {sideBarLinks.map((item, index) => (
                    <ListItem
                        key={item.title + item}
                        disablePadding
                        sx={{ display: "block" }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                                pointerEvents: "none",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                sx={{ opacity: open ? 1 : 0 }}
                                className={"sidebar-link-texts"}
                            />
                        </ListItemButton>
                        <List sx={{ paddingLeft: "1rem" }}>
                            <ListItem disablePadding sx={{ display: "block" }}>
                                {item.links.map((link) => (
                                    <Box
                                        key={link.name + link}
                                        sx={{ borderRadius: "100px" }}
                                    >
                                        <NavLink
                                            to={link.url}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                            }}
                                            className={({ isActive }) =>
                                                isActive ? "activeSideNav" : ""
                                            }
                                        >
                                            <Tooltip
                                                title={open ? "" : link.name}
                                                placement="right-end"
                                            >
                                                <ListItemButton
                                                    sx={{
                                                        minHeight: 48,
                                                        justifyContent: open
                                                            ? "initial"
                                                            : "center",
                                                        borderRadius: "100px",
                                                        px: 2.5,
                                                    }}
                                                    className="sidebar-link-background"
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            minWidth: 0,
                                                            mr: open
                                                                ? 3
                                                                : "auto",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        {link.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        className={
                                                            "sidebar-link-texts"
                                                        }
                                                        primary={link.name}
                                                        sx={{
                                                            opacity: open
                                                                ? 1
                                                                : 0,
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </Tooltip>
                                        </NavLink>
                                    </Box>
                                ))}
                            </ListItem>
                        </List>
                        {index === sideBarLinks.length - 1 ? "" : <Divider />}
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
