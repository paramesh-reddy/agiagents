import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "../src/pages/home"; // Import your homepage component
import DetailPage from "./pages/details";
import Footer from "./components/footer/Footer";
// import AgentDetails from "./components/admin/Admin";
import SubmitPage from "./components/form/Form";
import UpdatePage from "./components/update/Form";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          {/* <Route path="/approve/:id" element={<AgentDetails/>}/> */}
          <Route path="/update/:id" element={<UpdatePage />} />
          
        </Routes>
        {/* <SubmitPage/> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
