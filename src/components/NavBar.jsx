import { FaBars } from 'react-icons/fa';
import {  useState } from 'react';
import { BiX } from 'react-icons/bi';
let toggleClasse = '';
const NavBar = () => {

  const [toggleNavbar, setToggleNavbar] = useState(false);
  const handleNavBarToggle = () =>{
    setToggleNavbar(!toggleNavbar)
  }
 
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      {/* mobile-nav-active */}
      <div className={`container-fluid d-flex align-items-center justify-content-between
      ${toggleNavbar == true ? 'mobile-nav-active ' : ''}`} >
      
        <a href='' className='logo d-flex align-items-center me-auto me-lg-0'>
          <h1>
            <span>D</span>elighful<span>Restaurant</span>
          </h1>
        </a>

        <nav id='navbar' className='navbar'>
          <ul>
            <li>
              <a href='#hero'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#menu'>Menu</a>
            </li>
            <li>
              <a href='#events'>Events</a>
            </li>
            <li>
              <a href='#chefs'>Chefs</a>
            </li>
            <li>
              <a href='#gallery'>Gallery</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>

        <a className='book-service-btn' href='booking'>
          Book A Service
        </a>
        <i className='mobile-nav-toggle mobile-nav-show' onClick={handleNavBarToggle}>
          {toggleNavbar ? <BiX  className='close-btn'/>: <FaBars />}
        </i>
      </div>
      
    </header>
  );
};
export default NavBar;
