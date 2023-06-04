import React from "react";
import "../css/style.css";
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
            <div className="card" style={{margin:"3rem",padding: "2rem", background: "rgb(217, 217, 217)", borderRadius:"25px"}}>
            	<p className="fw-bold fs-lg">Achievement: Posture Prodigy</p>
            	<p className="fs-sm mb-md">
              <i className="fas fa-trophy"/>&nbsp; You have sat straight for 5 consecutive times
            	</p>
           </div>
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
