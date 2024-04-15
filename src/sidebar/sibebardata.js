
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export const SidebarData = [
    {
        title: "User Management",
        icon: {PeopleOutlinedIcon},
        path: "/admin/userManagement"
    },
    {
        title: "Badminton Session",
        icon: {CalendarTodayOutlinedIcon},
        path: "/admin/calendar"
    },
    {
        title: "Support",
        icon: {PersonOutlinedIcon},
        path: "/admin/support"
    },
    {
        title: "Report Bug",
        icon: {HelpOutlineOutlinedIcon},
        path: "/admin/report-bug"
    }
  ];