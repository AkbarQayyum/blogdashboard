import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import LeaderboardIcon from "@mui/icons-material/Leaderboard";
export const AdminSideBarData = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
  {
    name: "Blogs",
    path: "/blogs",
    icon: <LeaderboardIcon fontSize="small" />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subitems: [],
  },
];
