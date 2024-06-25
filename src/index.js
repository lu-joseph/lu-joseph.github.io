import ReactDOM from "react-dom/client";
import "./css/CardEntry.css";
import "./css/GeneralFormatting.css";
import "bootstrap/dist/css/bootstrap.css";

function Line() {
  return (
    <>
      <div className="line-container">
        <svg width="100%" height="2">
          <line
            y1="1"
            y2="1"
            x1="100%"
            x2="0"
            stroke-width="2"
            stroke="rgba(249, 249, 251, 1)"
          />
        </svg>
      </div>
    </>
  );
}

function ExperienceEntry(props) {
  return (
    <>
      <div className="experience-entry">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-12 col-sm-12">
              <div className="company-name">{props.company}</div>
              <div className="role">{props.role}</div>
              <div className="date-range">{props.dates}</div>
              <div className="location">{props.location}</div>
            </div>
            <div className="col-md-9 col-xs-12 col-sm-12">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <div className="homepage-container">
        <div className="container navbar1">
          <div className="row">
            <div className="col name">Joseph Lu</div>
            <div className="col navbar-links">
              <a href="#contact">CONTACT</a>
              <a href="#experience">EXPERIENCE</a>
              <a href="#about">ABOUT</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col home-page-text">
              <div className="title">Software Developer</div>
              <div className="description">
                I'm a versatile Software Developer that works on both Front and
                Back-end Systems
              </div>
              <div className="phone-number">+1 (628) 303 4235</div>
              <div className="email">josephlu414@gmail.com</div>
            </div>
            <div className="col"></div>
          </div>
          <div className="homepage-photo">
            <img src="images/homepage.jpg" alt="homepage" />
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8">
              <div className="about-title">
                With nearly 2 years of experience in internships, I've picked up
                the ability to adapt to any system quickly.
              </div>
              <div className="about-description">
                Having worked at many internships across companies of varying
                sizes, I've developed a well-rounded skill set and adaptability
                that make me a versatile employee.
              </div>
              <div className="about-description">
                Each experience has honed my ability to quickly integrate into
                all sorts of teams, understand different organizational formats,
                and tackle a wide range of technical challenges.
              </div>
              <div className="about-description">
                Whether it's a startup's fast-paced environment or a large
                corporation's structured approach, I can thrive and deliver
                impactful results!
              </div>
              <div className="about-contact-button">
                <a className="contact-button-text" href="#contact">
                  CONTACT ME
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4"></div>
          </div>
        </div>
      </div>
      <div id="experience">
        <div className="container">
          <div className="experience-title page-title">Experience</div>
          <Line></Line>
          <ExperienceEntry
            company="Cambly"
            role="Software Engineering Intern"
            dates="May 2024 - Present"
            location="San Francisco, CA"
            description={
              <>
                <div>
                  Led projects from concept to launch, following software
                  development guidelines including:
                </div>
                <ul>
                  <li>Formulating technical implementation plans,</li>
                  <li>Delivering product demonstrations,</li>
                  <li>Integrating testing, and</li>
                  <li>Undergoing thorough code reviews</li>
                </ul>
              </>
            }
          ></ExperienceEntry>
          <Line></Line>
          <ExperienceEntry
            company="LCBO"
            role="Fullstack Developer Intern"
            dates="May-August 2023"
            location="Waterloo, ON"
            description={
              <>
                <div style={{ "font-weight": "800" }}>
                  Backend responsibilities
                </div>
                Deployed dockerized applications with multiple microservices to
                Azure, providing stores with requested data. Debugged
                microservices to remove inaccurate inventory data from API
                calls.
                <div style={{ "font-weight": "800", "margin-top": "10px" }}>
                  Frontend responsibilities
                </div>
                Created RFID scanning prototype using Bootstrap, React, and
                Redux, with backend database integration.
              </>
            }
          ></ExperienceEntry>
          <Line></Line>
          <ExperienceEntry
            company="Ontario Public Service"
            role="Software Developer Intern"
            dates="September-December 2022"
            location="Toronto, ON"
            description={
              <ul>
                <li>
                  Developed C# script using PL/SQL procedures to sync Oracle
                  database with Team Foundation Server (TFS), preventing
                  critical errors for other developers caused by mismatching
                  versions of the database.
                </li>
                <li>
                  Coded package procedures in PL/SQL to use in SSRS reports,
                  aiding the development of future reports
                </li>
                <li>
                  Designed SQL Server Reporting Services (SSRS) reports,
                  increasing work efficiency of analysts{" "}
                </li>
              </ul>
            }
          ></ExperienceEntry>
          <Line></Line>
          <ExperienceEntry
            company="OpenText"
            role="Software Automation Intern"
            dates="January-April 2022"
            location="Waterloo, ON"
            description={
              <ul>
                <li>
                  Programmed reusable REST API test steps written in Groovy for
                  Selenium framework
                </li>
                <li>
                  Optimized framework according to clean code principles by
                  giving feedback in a written report
                </li>
              </ul>
            }
          ></ExperienceEntry>
          <Line></Line>
          <ExperienceEntry
            company="Doxim"
            role="QA Anaylst"
            dates="May-August 2021"
            location="Markham, ON"
            description={
              <ul>
                <li>
                  Set up JMeter test automation framework to incorporate modular
                  test steps and suites
                </li>
                <li>
                  Implemented test cases in JMeter to test software product
                </li>
                <li>
                  Learned to use Git source control, Jira, and Agile methodology
                </li>
              </ul>
            }
          ></ExperienceEntry>
          <Line></Line>
        </div>
      </div>
      <div id="contact" className="contact-container">
        <div className="container">
          <div className="page-title">Contact Me</div>
          <div className="row">
            <div className="col-md-3 col-xs-12 col-sm-12">
              <img src="images/phone.png" alt="phone" />
              <div>+1 (628) 303 4235</div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12">
              <img src="images/email.png" alt="email" />
              <div>josephlu414@gmail.com</div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12">
              <img src="images/github.svg" alt="github" />
              <div>github.com/lu-joseph</div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-12">
              <img src="images/linkedin.svg" alt="linkedin" />
              <div>linkedin.com/in/lu-joseph</div>
            </div>
          </div>
          <div className="footer-name">Joseph Lu</div>
        </div>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
