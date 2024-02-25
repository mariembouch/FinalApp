import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Doctors from "./routes/Doctors/Doctor"; 
import Clients from "./routes/Clients/Client"; 
import Admin from "./routes/Admin/Admin"; 
import Assistant from "./routes/Assistant/Assistant"; 
import { Link } from 'react-router-dom';
import Home from "./component/Hero/Home"; 


function Login() {
  return (
    <>
      
      <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/Doctors' element={<Doctors />} />
        <Route path='/Clients' element={<Clients />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Assistant' element={<Assistant />} />

      </Routes>
      <ul>
        <li>
          <Link to='/Admin'>Admin</Link>
        </li>
        <li>
          <Link to='/Doctors'>Doctors</Link>
        </li>
        <li>
          <Link to='/Clients'>Clients</Link>
        </li>
        <li>
          <Link to='/Assistant'>Assistant</Link>
        </li>
      </ul>
    </>
  );
}

export default Login;
