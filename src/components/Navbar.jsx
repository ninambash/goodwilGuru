import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'

export default function Navbar({ currentUser, handleLogout }) {
  const loggedIn = (
    <>
      {/* if the user is logged in... */}
      <Link to="/">
        <span onClick={handleLogout}>logout</span>
      </Link>
      <Link to="/profile">profile</Link>
    </>
  );

  const loggedOut = (
    <>
      {/* if the user is not logged in... */}
      <Link to="/register">register</Link>
      <Link to="/login">login</Link>
    </>
  );

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Home
      </Link>
      <div className="navbar-links">
        {currentUser ? loggedIn : loggedOut}
      </div>
    </nav>
  );
}
