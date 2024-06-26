import React from "react";
import SidebarDashboard from "../ProfileDashboard/DashboradScreen/userComponentfolder/SidebarDashboard/SidebarDashboard";
import NavbarDashboard from "../ProfileDashboard/DashboradScreen/userComponentfolder/NavDashboard/NavbarDashboard";
import Dashbord from "./Dashbord";
import Calender from "../ProfileDashboard/DashboradScreen/userComponentfolder/CalendarComponent/Calender";
import { Routes, Route } from "react-router-dom";
import Usersetting from "../ProfileDashboard/DashboradScreen/userComponentfolder/UserSettingComponent/Usersetting";
import PageNotFound from "../My_ScreenPages/PageNotFound/PageNotFounds";
import StackBars from "../ProfileDashboard/DashboradScreen/userComponentfolder/Report/Report";
import style from "./dashbord.module.css";
const DashboardPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarDashboard />
      <div className={style.DashboardPage_container}>
        <div>
          <NavbarDashboard />
        </div>
        <div>
          <Routes>
            <Route path="/*" element={<Dashbord />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/settings" element={<Usersetting />} />
            <Route path="/report" element={<StackBars />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
