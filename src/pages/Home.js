import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-entry">
      <div className="entry-card">
        <div className="title-container">
          <div className="title">Welcome to my site!</div>
        </div>
        <div className="details-container">
          <img
            className="home-page-image image"
            src="./images/home-me-3.jpg"
            alt=""
          ></img>
          <div className="details">
            My name is Joseph Lu, and I'm a computer science student at the
            University of Waterloo.
          </div>
          <div className="details">
            For Fall 2022, I will be interning for the Ontario Ministry of the Attorney General.
          </div>
          <div className="details">
            I specialize in <b>Backend</b> work, but I am developing my{" "}
            <b>Fullstack</b> and <b>Frontend</b> skills as well.
          </div>
          <div className="details">
            Check the{" "}
            <b>
              <a href="https://josephlu.ca/about" className="about-page-link">
                About
              </a>{" "}
            </b>
            page to see my skills in detail!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
