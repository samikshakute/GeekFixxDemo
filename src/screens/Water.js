import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import "../css/style.css";
import { LineChartWater } from "../components/charts/LineChartWater";
import { useState } from "react";

function Water() {

  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 className="mb-xxl">Water Reminders</h1>
            <div className="line-graph">
              <LineChartWater> </LineChartWater>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Water;