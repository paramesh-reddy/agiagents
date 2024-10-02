import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "../src/pages/home"; // Import your homepage component
import DetailPage from "./pages/details";
import { AdminLayout } from "./layout/Index";
import Footer from "./components/footer/Footer";
// import AgentDetails from "./components/admin/Admin";
import SubmitPage from "./components/form/Form";
import UpdatePage from "./components/update/Form";
import Home from "../src/pages/home";
import Index from "./layout2/submit/Index";

import MainPage from "./layout2/home/Home";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/submit" element={<SubmitPage />} />
            {/* <Route path="/approve/:id" element={<AgentDetails/>}/> */}
            <Route path="/update/:id" element={<UpdatePage />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/form" element={<Index />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
