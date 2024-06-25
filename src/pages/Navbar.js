import { Outlet, NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  // const activeNavLinkStyle = ({ isActive }) => ({
  //   color: isActive ? "var(--colour3)" : "var(--colour4)",
  // });
  return (
    <>
      <div className="container navbar1">
        <div className="row">
          <div className="col name">Joseph Lu</div>
          <div className="col navbar-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
