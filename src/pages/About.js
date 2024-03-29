import AboutEntry from "../Components/AboutEntry";

const About = () => {
  const languages = [
    { text: "Python" },
    { text: "C++, C, C#" },
    { text: "Java, Groovy, Processing" },
    { text: "HTML, CSS, JavaScript, React" },
    { text: "PL/SQL, PostgreSQL, SQL" },
  ];
  const otherSkills = [
    { text: "RESTful APIs" },
    { text: "Agile development" },
    { text: "Git" },
    { text: "Jira/Atlassian" },
    { text: "Linux" },
    { text: "JMeter, Postman" },
    { text: "Unity" },
    { text: "AutoCAD" },
  ];
  const badminton = [
    { text: "Member of Junior National Badminton team from 2018-2020" },
    { text: "Selected for 2018 and 2020 BWF World Junior Championships" },
    { text: "Gold medalist at 2019 Carebaco Junior International" },
    { text: "2018 U17 boys singles national champion" },
  ];
  const boarding = [
    { text: "Last fall, I started longboarding as a way to get around campus" },
    {
      text: "I enjoyed it a lot, and when winter came around I started snowboarding too!",
    },
  ];
  const interests = [
    {
      text: "I started Speedcubing back in 3rd grade, and got my personal best down to 15 seconds",
    },
    {
      text: "Storytelling, especially through animated TV shows, video games, and comics",
    },
  ];
  return (
    <div className="about-entry-list">
      <div className="about-entry">
        <div className="entry-card skills-card">
          <div className="title-container">
            <div className="title">Skills</div>
          </div>
          <div className="details-container">
            <div className="programming">
              <div className="header">Programming</div>
              <AboutEntry title="Programming" details={languages} />
            </div>
            <div className="other-skills">
              <div className="header">Other Skills</div>
              <AboutEntry title="Other" details={otherSkills} />
            </div>
          </div>
        </div>
        <div className="entry-card sports-card">
          <div className="title-container">
            <div className="title">Sports</div>
          </div>
          <div className="details-container">
            <div className="badminton">
              <div className="header">Badminton</div>
              <div className="content row">
                <div className="image-container col-r-6">
                  <img
                    className="image"
                    src="./images/badminton.jpg"
                    alt="badminton"
                  ></img>
                </div>
                <div className="details col-r-6">
                  <AboutEntry title="Badminton" details={badminton} />
                </div>
              </div>
            </div>
            <div className="boarding">
              <div className="header">Snowboarding & Longboarding</div>
              <div className="content row">
                <div className="image-container col-4">
                  <img
                    className="image"
                    src="./images/snowboarding.jpg"
                    alt="snowboarding"
                  ></img>
                </div>
                <div className="details col-8">
                  <AboutEntry
                    title="Snowboarding/Longboarding"
                    details={boarding}
                  />
                </div>
              </div>
              <div className="image-container longboarding">
                <img
                  className="image"
                  src="./images/longboarding.jpg"
                  alt="lonboarding"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="entry-card other-card">
          <div className="other-interests">
            <div className="title-container">
              <div className="title">Other Interests</div>
            </div>
            <div className="details-container">
              <AboutEntry details={interests}></AboutEntry>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
