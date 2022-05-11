import ProjectEntryDetail from "./ProjectEntryDetail";
import "../css/ProjectEntry.css";

const ProjectEntry = (props) => {
  const iconVisibility = props.Github === "" ? " invisible" : "";
  const githubIconClass = "fa fa-github col-2" + iconVisibility;
  return (
    <div class="entry-card">
      <div class="title-container row">
        <div class="col-2"></div>
        <div class="title col-8">{props.title}</div>
        <a href={props.Github}>
          <i class={githubIconClass}></i>
        </a>
      </div>

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
