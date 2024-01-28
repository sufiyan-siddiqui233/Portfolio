import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img
            // src="https://cdn-icons-png.flaticon.com/512/3097/3097084.png"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYUfa92dTKsrxJxrFhGxnEErmvwebDhkK0VBLfmlJm7Jg6x5nzeETUr40GP3ErAwvAzk&usqp=CAU"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn SecondaryBtn"
            href="https://www.linkedin.com/in/mohd-sufiyan-siddiqui-343809227/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
