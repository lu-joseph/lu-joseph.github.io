import ProjectEntry from "../ProjectEntry";
import "../css/Projects.css";

const Projects = () => {
  const reset_details = [
    { text: "Health app created for StormHacks 2022" },
    { text: "Backend written in Python, using Flask and PostgreSQL" },
  ];
  const jewel_theft_details = [
    { text: "2D top-down stealth game made with Python Tkinter" },
    { text: "Guards with random AI" },
    { text: "Wall collision, AI detection of player" },
  ];
  const baddie_match_details = [
    {
      text: "Contributed to backend of University of Waterloo Badminton team scores webapp",
    },
    {
      text: "Webapp uses Python, Flask, and PostgreSQL in backend, and React in the frontend",
    },
  ];
  const cellular_automaton_details = [
    {
      text: "Cellular Automaton simulating spread of humanity made with Processing (Java)",
    },
    { text: "Cells travel between planets" },
    { text: "Populations drop from overpopulation" },
  ];
  const traffx_details = [
    { text: "Traffic simulation made in Processing (Java)" },
    { text: "Settings allow for different traffic conditions and roads" },
    {
      text: "Cars are able to drive at differing speeds, switch lanes, react to the cars around them, and crash",
    },
  ];
  return (
    <div class="projects-list">
      <ProjectEntry
        title="Reset"
        imgsrc="./images/reset.png"
        imgHeight="500px"
        details={reset_details}
      />
      <ProjectEntry
        title="Baddie Match"
        imgsrc="./images/baddie-match.png"
        imgHeight="500px"
        details={baddie_match_details}
      />
      <ProjectEntry
        title="Jewel Theft"
        imgsrc="./images/jewel-theft.png"
        imgHeight="500px"
        details={jewel_theft_details}
      />
      <ProjectEntry
        title="Kefuffle Galaxy"
        imgsrc="./images/cellular-automaton.png"
        imgHeight="500px"
        details={cellular_automaton_details}
      />
      <ProjectEntry
        title="TraffX"
        imgsrc="./images/traffx.png"
        imgHeight="500px"
        details={traffx_details}
      />
    </div>
  );
};

export default Projects;
