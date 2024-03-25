import React, { useState } from 'react';
import Header from "../../component/Head/Header"
import SideBar from "../../component/SideBar/SideBar"
import Profile from "../../component/Profile/Profile"
import "./Admin.css"; // You can style your admin page in Admin.css

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Header />
      <br></br>
         <br></br>
         <br></br>
         <br></br>
      <div className="admin-container">
        
        <div className="sidebar-container">
          <SideBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        </div>
        <div className="content">
          <Profile/>
         <br></br>
         <br></br>

         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>

         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>

        </div>
      </div>
    </>
  );
};

export default Admin;
