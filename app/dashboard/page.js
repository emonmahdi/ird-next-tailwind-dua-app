import React from "react";
import DashboardLayout from "./layout";
import axios from "axios";

const DashboardPage = () => {
  // console.log(categories);
  return <h2>This is Dashboard page...</h2>;
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

/* export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:5000/categories");

  return {
    props: {
      categories: data,
    },
    revalidate: 60, // In seconds - Adjust as needed
  };
};
 */
