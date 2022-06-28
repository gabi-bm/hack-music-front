import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";

const DashboardCategories = () => {
  return (
    <div>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div>Categories</div>
      </div>
    </div>
  );
};
export default DashboardCategories;
