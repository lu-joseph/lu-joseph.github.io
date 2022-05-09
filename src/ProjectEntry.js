import ProjectEntryDetail from "./ProjectEntryDetail";
import "./css/ProjectEntry.css";

const ProjectEntry = (props) => {
  return (
    <div class="entry-container">
      <div class="image-container">
        <img class="image" src={props.imgsrc} alt="Project"></img>
      </div>
      <div class="text-container">
        <div class="title">{props.title}</div>
        <ul class="details">
          {props.details.map((item) => (
            <ProjectEntryDetail key={item.id} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectEntry;
