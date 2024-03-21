import React from "react";
import SidebarDashboard from "../ProfileDashboard/DashboradScreen/userComponentfolder/SidebarDashboard/SidebarDashboard";
import NavbarDashboard from "../ProfileDashboard/DashboradScreen/userComponentfolder/NavDashboard/NavbarDashboard";
import Dashbord from "./Dashbord";
import Calender from "../ProfileDashboard/DashboradScreen/userComponentfolder/CalendarComponent/Calender";
import { Routes, Route } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarDashboard />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: " #f6f4ee",
        }}
      >
        <div>
          <NavbarDashboard />
        </div>
        <div>
          <Routes>
            <Route path="/*" element={<Dashbord />} />
            <Route path="/calender" element={<Calender />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
