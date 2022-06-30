import React from "react";
import { useParams } from "react-router-dom";
import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";
import ItemsTable from "../../Components/ItemsTable/ItemsTable";

const DashboardCategories = () => {
  const params = useParams();
  console.log(params.name);
  return (
    <div>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div>
          <ItemsTable />
        </div>
      </div>
    </div>
  );
};
export default DashboardCategories;
