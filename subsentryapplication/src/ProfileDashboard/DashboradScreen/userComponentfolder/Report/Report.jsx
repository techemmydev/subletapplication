import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import PieChartWithCenterLabel from "./PieChart";

export default function StackBars() {
  return (
    <>
      <div
        style={{
          padding: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            color: "#D4D5D9",
            lineHeight: "1.7",
            fontFamily: "Roboto",
          }}
        >
          Statistics
        </p>
        <h1 style={{ fontSize: "25px", color: "black", fontFamily: "Roboto" }}>
          Monthly Revenue Report
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "white",
        }}
      >
        <div>
          <BarChart
            series={[
              { data: [3, 4, 1, 6, 5], stack: "A", label: "Educational" },
              { data: [4, 3, 1, 5, 8], stack: "A", label: "Entertainment" },
              { data: [4, 2, 5, 4, 1], stack: "B", label: "Productivity" },
              { data: [2, 8, 1, 3, 1], stack: "B", label: "Health" },
              { data: [2, 8, 1, 3, 1], stack: "B", label: "Personal" },
            ]}
            width={600}
            height={350}
          />
        </div>
        <div>
          <PieChartWithCenterLabel />
        </div>
      </div>
    </>
  );
}
