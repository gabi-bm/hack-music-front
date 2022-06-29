import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";

const DashboardProducts = () => {
  return (
    <div>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div>Products</div>
      </div>
    </div>
  );
};
export default DashboardProducts;
