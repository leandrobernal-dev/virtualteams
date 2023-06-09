import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import FolderIcon from "@mui/icons-material/Folder";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import ForumIcon from "@mui/icons-material/Forum";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import FeedIcon from "@mui/icons-material/Feed";
import EditNoteIcon from "@mui/icons-material/EditNote";
import InsertChartIcon from "@mui/icons-material/InsertChart";

export const sideBarLinks = [
    {
        title: "ORG",
        icon: <PeopleAltIcon />,
        links: [
            {
                name: "Team",
                icon: <AccountCircleIcon />,
                url: "team",
            },
            {
                name: "Meet",
                icon: <VideoCameraFrontIcon />,
                url: "meeting",
            },
            {
                name: "Ping",
                icon: <ForumIcon />,
                url: "ping",
            },
        ],
    },
    {
        title: "PROJECT",
        icon: <WidgetsIcon />,
        links: [
            {
                name: "Kanban",
                icon: <ViewKanbanIcon />,
                url: "kanban",
            },
            {
                name: "Files",
                icon: <FolderIcon />,
                url: "files",
            },
            {
                name: "Activities",
                icon: <FeedIcon />,
                url: "activities",
            },
            {
                name: "Project Stats",
                icon: <InsertChartIcon />,
                url: "project-stats",
            },
            {
                name: "Project Notes",
                icon: <EditNoteIcon />,
                url: "projectnotes",
            },
        ],
    },

    {
        title: "MANAGE",
        icon: <ManageAccountsIcon />,
        links: [
            {
                name: "Time Tracker",
                icon: <AccessTimeIcon />,
                url: "tracker",
            },
            {
                name: "Events",
                icon: <CalendarMonthIcon />,
                url: "events",
            },
            {
                name: "Personal Notes",
                icon: <StickyNote2Icon />,
                url: "mynotes",
            },
        ],
    },
];
