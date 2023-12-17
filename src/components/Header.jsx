import React from "react";
import { NavLink } from "react-router-dom";
import "../style/responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="fixed opacity-[0.8] w-[100%] top-0 left-0 bg-white z-[10000]">
      <div className="header flex justify-between items-center flex-wrap w-[90%] mx-auto py-4">
        <div className="flex items-center gap-[10px]">
          <img src="src/assets/Group.png" alt="" className="w-[30px]" />
          <h1 className="left text-md font-bold">digital base</h1>
        </div>
        <div className="right flex items-center gap-[20px] text-sm">
          <div className="links flex justify-between gap-[50px] items-center">
            <NavLink
              className="nav"
              to="/"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderBottom: "1px solid black",
                    }
                  : {
                      border: "none",
                    };
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="nav"
              to="/services"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderBottom: "1px solid black",
                    }
                  : {
                      border: "none",
                    };
              }}
            >
              Services{" "}
              <FontAwesomeIcon icon={faCaretDown} className="ml-[3px]" />
            </NavLink>
            <NavLink
              className="nav"
              to="/about"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderBottom: "1px solid black",
                    }
                  : {
                      border: "none",
                    };
              }}
            >
              About
            </NavLink>
            <NavLink
              className="nav"
              to="/how-we-deliver"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderBottom: "1px solid black",
                    }
                  : {
                      border: "none",
                    };
              }}
            >
              How We Deliver
            </NavLink>
            <NavLink
              className="nav"
              to="/portfolios"
              style={({ isActive }) => {
                return isActive
                  ? {
                      borderBottom: "1px solid black",
                    }
                  : {
                      border: "none",
                    };
              }}
            >
              Portfolios
            </NavLink>
          </div>
          <button className="bg-black p-2 rounded-md text-white ml-[30px]">
            <NavLink to="/contact">ContactUs</NavLink>
          </button>
          <div className="menu-icon hidden">
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
