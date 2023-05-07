import React from "react";
import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import { Link } from "react-router-dom";

function Statistics() {
  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="cards-container">
          <div className="card">
            <p className="fw-bold fs-lg">BackCare Stats</p>
            <p className="fs-sm mb-md">
              How many times did you took care of your Back?
            </p>
            <Link to={"/backcare"}>
              <button className="btn btn-primary">View Stats</button>
            </Link>
          </div>

          <div className="card">
            <p className="fw-bold fs-lg">EarCare Stats</p>
            <p className="fs-sm mb-md">
              How many times did you took care of your ears?
            </p>
            <Link to={"/earcare"}>
              <button className="btn btn-primary">View Stats</button>
            </Link>
          </div>

          <div className="card">
            <p className="fw-bold fs-lg">EyeCare Stats</p>
            <p className="fs-sm mb-md">
              How many times did you took care of your eyes?
            </p>
            <Link to={"/eyecare"}>
              <button className="btn btn-primary">View Stats</button>
            </Link>
          </div>

          <div className="card">
            <p className="fw-bold fs-lg">Water Stats</p>
            <p className="fs-sm mb-md">
              How many times did you took care of your Hydration?
            </p>
            <Link to={"/hydration"}>
              <button className="btn btn-primary">View Stats</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
