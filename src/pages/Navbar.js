import { Outlet, NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const activeNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--colour3)" : "var(--colour1)",
  });
  return (
    <>
      <nav className="navbar">
        <div className="name">Joseph Lu</div>
        <button
          onClick={() => {
            console.log("clicked");
            const navbarLinks =
              document.getElementsByClassName("navbar-links")[0];
            navbarLinks.classList.toggle("active");
          }}
          href="#"
          className="toggle-button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink to="/" exact id="home-link" style={activeNavLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                id="projects-link"
                style={activeNavLinkStyle}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                id="experience-link"
                style={activeNavLinkStyle}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" id="about-link" style={activeNavLinkStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                id="contact-link"
                style={activeNavLinkStyle}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
