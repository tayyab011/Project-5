import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <div className="navbar bg-base-100 bg-white" data-theme="light">
        <div className="navbar-start">
          <div className="dropdown">
           <label className="btn btn-circle swap swap-rotate lg:hidden">
  
  
  <input type="checkbox" />
  
 
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-white"
            >
              <li>
                <Link to={'/'} className="hover:bg-black hover:text-white text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/about'} className="hover:bg-black hover:text-white text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={'/facilities'} className="hover:bg-black hover:text-white text-black">
                  Facilities
                </Link>
              </li>

              <li>
                <Link to={'/get'}  className="hover:bg-black hover:text-white text-black">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <a className="btn btn-ghost normal-case text-xl text-black">
            Mrittika
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link to={'/'} className="hover:bg-black hover:text-white text-black">Home</Link>
            </li>
            <li>
              <Link to={'/about'} className="hover:bg-black hover:text-white text-black">
                About Us
              </Link>
            </li>

            <li>
              <Link to={'/facilities'} className="hover:bg-black hover:text-white text-black">
                Facilities
              </Link>
            </li>
            <li>
              <Link to={'/get'} className="hover:bg-black hover:text-white text-black">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    );
};

export default Nav;