import "./DashSideBar.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const DashSideBar = () => {
  return (
    <div className="sideBar">
      <ul className="dash-ul">
        <Link className="dash-link" to="/"></Link>
        <Link className="dash-link" to="/dashboard">
          <li className="dash-li">
            <FaIcons.FaRegChartBar />
            <span className="text-responsive"> sales</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/admin">
          <li className="dash-li">
            <FaIcons.FaUserFriends />
            <span className="text-responsive"> admin</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/categories">
          <li className="dash-li">
            <FaIcons.FaThList />
            <span className="text-responsive"> categories</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/orders">
          <li className="dash-li">
            <FaIcons.FaShopify />
            <span className="text-responsive"> orders</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/products">
          <li className="dash-li">
            <FaIcons.FaProductHunt />
            <span className="text-responsive"> products</span>
          </li>
          <li className="dash-li">
            <FaIcons.FaHome />
            <span className="text-responsive"> hack music</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default DashSideBar;
