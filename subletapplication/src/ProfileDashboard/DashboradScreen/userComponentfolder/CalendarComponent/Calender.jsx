import React from "react";
import style from "../CalendarComponent/calendar.module.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calender = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "5%",
        marginTop: "5%",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker orientation="landscape" />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
