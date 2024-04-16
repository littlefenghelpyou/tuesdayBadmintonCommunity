import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const AdminHeader = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="admin-header">
      <div className="header">

      {title}
      </div>
      <div className="subtitle">

      {subtitle}
      </div>
    </div>
  );
};

export default AdminHeader;
