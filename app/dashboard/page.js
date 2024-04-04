import React from "react";
import DashboardLayout from "./layout";

const DashboardPage = () => {
  return <h2>This is Dashboard page...</h2>;
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
