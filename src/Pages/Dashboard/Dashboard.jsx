import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";
import NavBar from "../../Components/Navbar/Navbar";
import "./Dashboard.css";
import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";

const Dashboard = () => {
  return (
    <>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div classname=" d-flex dash-content">
          <img src="https://i.postimg.cc/Wpnc8NpN/blue.jpg" alt="" />
          <img src="https://i.postimg.cc/MKp2rCXy/orange.jpg" alt="" />
          <img src="https://i.postimg.cc/rwd6q51s/verde.jpg" alt="" />
          <img src="https://i.postimg.cc/02XRgVJh/violeta.jpg" alt="" />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
