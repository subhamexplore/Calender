import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./styles.css";

const Calender = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part">main content</div>
      </div>
    </div>
  );
};

export default Calender;
