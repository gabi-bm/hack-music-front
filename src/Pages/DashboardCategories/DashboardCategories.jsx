import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";
import ItemsTable from "../../Components/ItemsTable/ItemsTable"

const DashboardCategories = ({entity}) => {
  console.log(entity)
  return (
    <div>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div><ItemsTable entity={entity} ></ItemsTable></div>
      </div>
    </div>
  );
};
export default DashboardCategories;
