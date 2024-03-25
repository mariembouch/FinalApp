import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../routes/Login/Login.js";
import HomePage from "../routes/HomePage/HomePage.js";
import Doctors from "../routes/Doctors/Doctor.js"
import Admin from "../routes/Admin/Admin.js"
import Patients from "../routes/Clients/Client.js"
import Assistants from "../routes/Assistant/Assistant.js"
import Ambulance from "../routes/Ambulance/Ambulance.js"
import "./Controller.css";


const Controller = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/#Services/login" element={<Login/>}/>
        <Route path="/doctors" element={<Doctors />} /> {/* Route for doctors */}
        <Route path="/patients" element={<Patients />} /> {/* Route for patients */}
        <Route path="/assistants" element={<Assistants />} /> {/* Route for assistants */}
        <Route path="/admin" element={<Admin />} /> {/* Route for admin */}
        <Route path="/Ambulance" element={<Ambulance />} /> {/* Route for ambulance */}

      </Routes>
    </Router>
  );
};

export default Controller;
