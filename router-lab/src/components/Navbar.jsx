import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <Link className='space' to={"/"}>Kalvium❤️</Link>
      <div id='two'>
        <NavLink to={"/contacts"}>Contacts</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className='space'>
      {children}
    </Link>
  );
};

export default Navbar;
