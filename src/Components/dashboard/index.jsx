import React from "react";
import Search from "./search";
import "./dashboard.scss";
import Breadcrum from "../breadcrum";

const Dashboard = () => {
  return (
    <main className="dashboard_content">
      <Search />
      <Breadcrum />
    </main>
  );
};

export default Dashboard;
