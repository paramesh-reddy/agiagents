import React from "react";

import "./Index.css";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
export function AdminLayout(props) {
  const isAuthenticated = () => {
    const accessToken = localStorage.getItem("token");
    return true;
  };
  return (
    <div className="row p-0 m-0">
      <React.Fragment>
        {isAuthenticated() ? (
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 m-0 bg-light">
            {/* Top Navbar */}
            <Navbar />
            <div>
              {" "}
              
            </div>
            
            {/* Main content */}
            <div className="d-flex justify-content-between">
              <div className="p-0 w-100 main-content">
                <Outlet />
              </div>
              
            </div>
            <Footer />
          </div>

        ) : (
          <Navigate to="/login" replace />
        )}
      </React.Fragment>
         
    </div>
  );
}
