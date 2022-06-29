import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";

const DashboardAdmin = () => {
  return (
    <>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div>Admin</div>
      </div>
    </>
  );
};
export default DashboardAdmin;
