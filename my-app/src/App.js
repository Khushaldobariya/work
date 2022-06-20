/*error Expected an assignment or function call and instead saw an expression.*/
import logo from "./logo.svg";
// css
import "./App.css";
import Navbar from "./Pages/Navbar";
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";
// js
import { Routes, Route  } from "react-router-dom";
import "./assets/js/app.js";
import Sidebar from "./Pages/Sidebar";
import Dashbord from "./Pages/Dashbord";
import Chat from "./Pages/Chat";
import Table from "./Pages/Table";





function App() {
  return (
    <>
      <Navbar />
        <Sidebar />
      <div id="layout-wrapper">
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Dashbord" element={<Dashbord />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
