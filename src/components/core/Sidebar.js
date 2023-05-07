import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <Link to="/">
          <li>
            <i className="fa-solid fa-house-chimney"></i>
            <span className="fw-bold">Dashboard</span>
          </li>
        </Link>
        <Link to="/statistics">
          <li>
            <i className="fas fa-chart-simple"></i>
            <span>Statistics</span>
          </li>
        </Link>
        <Link to="/achievements">
          <li>
            <i className="fas fa-trophy"></i>
            <span>Achievements</span>
          </li>
        </Link>
        <Link to="/howtouse">
          <li>
            <i className="fa-solid fa-circle-question"></i>
            <span>How to use</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
