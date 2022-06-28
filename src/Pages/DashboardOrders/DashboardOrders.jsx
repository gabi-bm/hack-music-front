import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";

const DashboardOrders = () => {
  return (
    <div>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div>Orders</div>
      </div>
    </div>
  );
};
export default DashboardOrders;
