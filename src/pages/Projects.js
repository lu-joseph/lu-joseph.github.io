import ProjectEntry from "../components/ProjectEntry";
import "../css/Projects.css";

const Projects = () => {
  const reset_details = [
    { text: "Health app created for StormHacks 2022" },
    {
      text: "Worked in a team of three members to complete project in 36 hours",
    },
    { text: "Wrote backend in Python, using Flask and PostgreSQL" },
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
  const friend_or_foe_details = [
    { text: "High school relationship simulation game developed in Unity" },
    { text: "Dialogue managed with Yarn Spinner tool" },
    {
      text: "Dialogue choices impact relationships between characters and conversations diverge as a result",
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
  const nba_details = [
    { text: "Simulation for 5-player NBA games between playoffs teams" },
    { text: "User controls tournament format and simulation speed" },
    {
      text: "Simulations run based on player statistics from 2018-2019 season",
    },
  ];
  return (
    <div className="projects-list">
      <ProjectEntry
        title="Reset"
        imgsrc="./images/reset.png"
        Github="https://github.com/lu-joseph/reset"
        details={reset_details}
      />
      <ProjectEntry
        title="Baddie Match"
        imgsrc="./images/baddie-match.png"
        Github="https://github.com/angelamchen/baddie-match"
        details={baddie_match_details}
      />
      <ProjectEntry
        title="Friend or Foe"
        imgsrc="./images/friend-or-foe.png"
        Github="https://github.com/lu-joseph/friend-or-foe"
        details={friend_or_foe_details}
      />
      <ProjectEntry
        title="Jewel Theft"
        imgsrc="./images/jewel-theft.png"
        Github="https://github.com/lu-joseph/jewel-theft"
        details={jewel_theft_details}
      />
      <ProjectEntry
        title="Kefuffle Galaxy"
        imgsrc="./images/cellular-automaton.png"
        Github="https://github.com/lu-joseph/kefuffle-galaxy"
        details={cellular_automaton_details}
      />
      <ProjectEntry
        title="TraffX"
        imgsrc="./images/traffx.png"
        Github="https://github.com/lu-joseph/traffx"
        details={traffx_details}
      />
      <ProjectEntry
        title="NBA 2019 Playoffs Simulation"
        imgsrc="./images/nba.png"
        Github="https://github.com/lu-joseph/nba-2019-playoffs-simulation"
        details={nba_details}
      />
    </div>
  );
};

export default Projects;
