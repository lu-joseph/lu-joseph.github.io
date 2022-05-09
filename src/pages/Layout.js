import { Outlet, NavLink } from "react-router-dom";
import "../css/Layout.css";

const Layout = () => {
  const activeNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "var(--colour3)" : "var(--colour1)",
  });
  return (
    <>
      <div class="navbar">
        <hr></hr>
        <nav>
          <ul class="navbar-links">
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
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
