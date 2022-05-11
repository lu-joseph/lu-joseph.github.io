import ProjectEntryDetail from "./ProjectEntryDetail";
import "./css/ProjectEntry.css";

const ProjectEntry = (props) => {
  return (
    <div class="entry-card">
      <div class="title">{props.title}</div>
      <div class="entry-container row">
        <div class="image-container col-4">
          <img class="image" src={props.imgsrc} alt="Project"></img>
        </div>
        <div class="text-container col-8">
          <ul class="details">
            {props.details.map((item) => (
              <ProjectEntryDetail key={item.id} text={item.text} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectEntry;
