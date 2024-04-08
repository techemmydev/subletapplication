import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay/PickersDay";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

const Calender = () => {
  const { selectedCompany } = useSelector((state) => state.companyIcon);
  const { nextPaymentDate } = useSelector((state) => state.payment);
  const [highlightedDays, setHighlightedDays] = useState([]);

  const handleMonthChange = () => {
    setHighlightedDays([]);
  };

  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
    const paymentDate = new Date(nextPaymentDate);

    const isSelected =
      day.date() === paymentDate.getDate() &&
      day.month() === paymentDate.getMonth() &&
      day.year() === paymentDate.getFullYear();

    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={
          isSelected && selectedCompany && selectedCompany.icons ? (
            <img
              src={selectedCompany.icons}
              style={{
                width: "30px",
                borderRadius: "30%",
                height: "30px",
              }}
            /> // Display the selected icon if it exists
          ) : (
            ""
          )
        }
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  }
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "orangered",
        width: "70%",
        // backgroundColor: "#28162d",
        padding: "2rem",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="landscape"
          onMonthChange={handleMonthChange}
          renderLoading={() => <DayCalendarSkeleton />}
          // renderHeader={renderHeader}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
        ></StaticDatePicker>
      </LocalizationProvider>
    </div>
  );
};
export default Calender;
