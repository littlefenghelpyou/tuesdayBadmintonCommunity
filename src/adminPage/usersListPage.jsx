import React from "react";
import { Box, useTheme } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "./mockData";
import AdminHomePage from "./adminHomePage";
import AdminHeader from "./adminHeader";

const UserListPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "registrarId", headerName: "Registrar Id", width: 200 },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      width: 300,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 100,
    },
    { field: "phone", headerName: "Phone Number", width: 300 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector
          slotProps={{ tooltip: { title: "Change density" } }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <GridToolbarExport
          slotProps={{
            tooltip: { title: "Export data" },
            button: { variant: "outlined" },
          }}
        />
      </GridToolbarContainer>
    );
  }
  return (
    <AdminHomePage>
      <div className="flex flex-column mr-4">
        <AdminHeader
          title="User Management"
          subtitle="Here show all the TBC registered users"
        />
        <div className="user-management-table">
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            slots={{
              toolbar: CustomToolbar,
            }}
          />
        </div>
      </div>
    </AdminHomePage>
  );
};

export default UserListPage;
