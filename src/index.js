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
              <div style={{ "font-weight": "800" }}>
                Technologies
              </div>
              {props.technologies}
              <div style={{ "font-weight": "800" }}>
                Responsibilities
              </div>
              {props.responsbilities}
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
                I'm a versatile Software Developer that works on both Front- and
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
            dates="May-August 2024"
            location="San Francisco, CA"
            technologies={
              <ul>
                <li>
                  Backend
                  <ul>
                    <li>Python, Flask</li>
                    <li>MongoDB</li>
                    <li>Algolia</li>
                  </ul>
                </li>
                <li>
                  Frontend
                  <ul>
                    <li>React, Typescript</li>
                    <li>Redux</li>
                    <li>Node, Express</li>
                  </ul>
                </li>
                <li>
                  Misc
                  <ul>
                    <li>Docker</li>
                    <li>CircleCI, PyTest</li>
                    <li>Metabase, Posthog (user metrics)</li>
                  </ul>
                </li>
              </ul>
            }
            responsbilities={
              <ul>
                <li>Delivered end-to-end features for a tutoring platform, driving a 12% increase in customer reservations</li>
                <li>Developed a new backend class hierarchy for data sync with Algolia, integrated with a smart search bar built in React and Typescript that improved curriculum search times for tutors by 74%
                </li>
                <li>Implemented first-lesson detection with customized icebreakers tied to learning goals, redesigning the lesson startup flow to improve new student engagement by 28%</li>
                <li>Integrated PyTest with coverage tracking into the CI pipeline in CircleCI, automating feature test validations</li>
                <li>Created A/B testing workflows in the Flask backend with SQL-based data retrieval in Metabase and PostHog, enhancing insights into user engagement and driving feature improvements</li>
              </ul>
            }
          ></ExperienceEntry>
          <Line></Line>
          <ExperienceEntry
            company="LCBO"
            role="Fullstack Developer Intern"
            dates="May-August 2023"
            location="Waterloo, ON"
            technologies={<ul>
              <li>
                Backend
                <ul>
                  <li>Python, Flask</li>
                  <li>PostgreSQL</li>
                </ul>
              </li>
              <li>
                Frontend
                <ul>
                  <li>React, Typescript</li>
                  <li>Redux</li>
                  <li>Node, Express</li>
                </ul>
              </li>
              <li>
                Misc
                <ul>
                  <li>Docker</li>
                  <li>Azure, Kubernetes</li>
                </ul>
              </li>
            </ul>}
            responsbilities={<ul>
              <li>Developed an RFID-based tracking solution for end-to-end inventory verification, enabling LCBO to trace unauthorized goods in the market and achieve targeted savings of $1.2M annually</li>
              <li>Built the web app with React, Typescript, and Redux in collaboration with the designer’s Figma mockups</li>
              <li>Configured CI/CD pipelines to automate Dockerized app deployment using Azure Kubernetes Service</li>
              <li>Developed a reusable template that contains React, Express, and PostgreSQL configurations, reducing initial development times of new applications by ~70%</li>
            </ul>}
          ></ExperienceEntry>
          <Line></Line>
          <ExperienceEntry
            company="Ontario Public Service"
            role="Software Developer Intern"
            dates="September-December 2022"
            location="Toronto, ON"
            technologies={<ul>
              <li>C# .NET</li>
              <li>PL/SQL</li>
              <li>Oracle DB</li>
              <li>Azure DevOps server (TFS)</li>
            </ul>}
            responsbilities={<ul>
              <li>
                Developed C# script to sync Oracle database with the version stored in Azure DevOps Server, preventing critical errors for other developers caused by mismatching database versions
              </li>
              <li>
                Created new procedures in PL/SQL to generate SQL Server Reporting Services (SSRS) reports, increasing the work efficiency of analysts by 85%
              </li>
            </ul>}
          ></ExperienceEntry>
          <Line></Line>
          <ExperienceEntry
            company="OpenText"
            role="Software Automation Intern"
            dates="January-April 2022"
            location="Waterloo, ON"
            technologies={<>
              <ul>
                <li>Groovy</li>
                <li>Selenium</li>
              </ul>
            </>}
            responsbilities={<ul>
              <li>
                Increased test coverage by 25% by developing reusable REST API test steps in Groovy for a Selenium framework, decreasing the setup time of future test scripts by ~50%
              </li>
              <li>
                Optimized framework according to clean code principles by
                giving feedback in a written report
              </li>
            </ul>}
          ></ExperienceEntry>
          <Line></Line>
          <ExperienceEntry
            company="Doxim"
            role="QA Anaylst"
            dates="May-August 2021"
            location="Markham, ON"
            technologies={<ul>
              <li>JMeter</li>
              <li>Jira</li>
            </ul>}
            responsbilities={
              <ul>
                <li>Developed a modular JMeter test automation framework and streamlined the migration of 100+ tests</li>
                <li>
                  Learned to use Git source control, Jira, and Agile methodology
                </li>
              </ul>}
          ></ExperienceEntry>
          <Line></Line>
        </div>
      </div >
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
