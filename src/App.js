import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
