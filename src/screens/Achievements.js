import React from "react";
import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import TrainBackCare from "./TrainBackCare.js";
import EarCare from "./EarCare.js";
import EyeCare from "./EyeCare.js";

function Achievements() {
  let postureAchievement = Number(localStorage.getItem("postureAchievement"));
  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        {postureAchievement > 5 && (
          <p>
            <i className="fas fa-trophy"/>Achievement Earned, You've sat straight for 5 consecutive times!
          </p>
        )}
        {postureAchievement > 10 && (
          <p>
            <i className="fas fa-trophy"/>Achievement Earned, You've sat straight for 10 consecutive times!
          </p>
        )}
      </div>
    </>
  );
}

export default Achievements;
