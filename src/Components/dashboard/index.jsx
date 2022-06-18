import React from "react";
import Search from "./search";
import "./dashboard.scss";
import Breadcrum from "../breadcrum";

const Dashboard = (props) => {
  return (
    <main className="dashboard_content">
      <Search />
      <Breadcrum {...props} />
      {props.children}
    </main>
  );
};

export default Dashboard;
