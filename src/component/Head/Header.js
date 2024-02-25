import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
              <a href='#About'>About</a>
              </li>
              <li>
              <a href='#Services'>Services</a>

              </li>
              <li>
                <a href='#Doctors'>Doctors</a>
              </li>
              <li>
                <a href='#Blocs'>Blocs</a>
              </li>
              <li>
                <a href='#location'>location</a>
              </li>
              <li>
                <a href='#Headv'>Headv</a>
              </li>
              <li>
                <button className='home-btn'>Log in</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    
    </>
  )
}

export default Header