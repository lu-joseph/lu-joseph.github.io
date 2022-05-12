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
              I'm currently looking for internships in software development,
              preferably backend, for fall 2022.
            </div>
            <div className="links">
              Links:
              <ul>
                <li>
                  <a
                    href="https://github.com/lu-joseph"
                    className="github-link"
                  >
                    My Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lu-joseph/"
                    className="linkedin-link"
                  >
                    My LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
