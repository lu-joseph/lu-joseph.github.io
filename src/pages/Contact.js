import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact-entry">
      <div className="entry-card">
        <div className="title-container">
          <div className="title">Contact Me!</div>
        </div>
        <div className="details-container">
          <div className="details">
            <div className="description">
              I'm currently looking for Fall 2022 internships in Software
              Development. I specialize in <b>Backend</b> work, but I am
              developing my <b>Fullstack</b> and <b>Frontend</b> skills as well.
            </div>
            <div className="description second-paragraph">
              Check the{" "}
              <b>
                <a href="https://josephlu.ca/about" className="about-page-link">
                  About
                </a>{" "}
              </b>
              page to see my skills in detail!
            </div>
            <div className="contact-info">
              <div className="icons">
                <a href="https://github.com/lu-joseph" className="github-link">
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/lu-joseph/"
                  className="linkedin-link"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009574503377">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </div>
              <div className="email-phone">
                <span className="email">joseph.lu1@uwaterloo.ca</span>
                <span className="phone-number">(226)-789-1686</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
