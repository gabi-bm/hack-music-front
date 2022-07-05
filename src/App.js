import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import MyRoutes from "./Myroutes";

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

import { Routes, Route } from "react-router-dom";
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
