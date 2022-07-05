import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyRoutes from "./Myroutes";
import OffcanvasInfo from "./components/OffcanvasInfo/OffcanvasInfo";

function App() {
  return (
    <div className="App">
      <MyRoutes />
      <OffcanvasInfo />
    </div>
  );
}

export default App;
