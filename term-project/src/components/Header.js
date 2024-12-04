import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";

const Header = () => {
  return (
    <>
      <style>
        {`
        /* Main navbar styles */
        .navbar {
          background-color: #ffffff;  /* White background for the navbar */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);  /* Subtle shadow for depth */
          padding: 10px 30px;
        }

        /* Navbar brand styling */
        .navbar-brand {
          font-size: 24px;
          font-weight: 600;
          color: #365486;  /* Dark blue for the brand */
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .navbar-brand:hover {
          color: #7FC7D9;  /* Light blue hover effect */
        }

        /* Navbar links */
        .navbar-nav .nav-item {
          margin-left: 15px;
        }
        .navbar-nav .nav-link {
          color: #555555;  /* Grey text for nav items */
          font-weight: 500;
          font-size: 16px;
          padding: 10px 20px;
          border-radius: 30px; /* Rounded corners */
          transition: all 0.3s ease;
        }

        /* Hover effect for links */
        .navbar-nav .nav-link:hover {
          background-color: #7FC7D9;
          color: white;
        }

        /* Active link styles */
        .navbar-nav .nav-link.active {
          background-color: #365486; /* Darker blue for active item */
          color: white;
          font-weight: 600;  /* Make the active link bolder */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow for emphasis */
          border-radius: 30px;
        }

        /* Buttons for Cart and Login */
        .navbar-btn {
          background-color: #365486;
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 16px;
          transition: background-color 0.3s, transform 0.3s;
        }
        .navbar-btn:hover {
          background-color: #7FC7D9;
          transform: scale(1.05);
        }

        /* Navbar right section */
        .navbar-right {
          display: flex;
          align-items: center;
        }

        /* Space between the navbar items and buttons */
        .navbar-nav, .navbar-right {
          display: flex;
          align-items: center;
        }
        .navbar-right .btn {
          margin-left: 15px;
        }
        `}
      </style>

      {/* Navbar Structure */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* Left Section - Navigation Links */}
          <div className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/products"
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </div>

          {/* Center Section - Branding */}
          <span className="navbar-brand">Term Project</span>

          {/* Right Section - Buttons (Login and Cart) */}
          <div className="navbar-right">
            <Login />
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
