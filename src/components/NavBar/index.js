import React from "react";
import { Nav, NavIcon, NavLink, Bars} from "./Navbar.elements";
import logodda from "../../images/logodda.png"


const Navbar = ({ toogle }) => {
  return (
    <>  
      <Nav>
        <NavLink to="/">
          <img src={logodda} alt="logo" />
        </NavLink>
        <NavIcon onClick={toogle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
