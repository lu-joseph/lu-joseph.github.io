import ProjectEntryDetail from "./ProjectEntryDetail";
import "../css/ProjectEntry.css";

const ProjectEntry = (props) => {
  const iconVisibility = props.Github === "" ? " invisible" : "";
  const githubIconClass = "fa fa-github" + iconVisibility;
  return (
    <div className="project-entry">
      <div className="entry-card">
        <div className="title-container row">
          <div className="col-2"></div>
          <div className="title col-8">{props.title}</div>
          <a href={props.Github} className="col-2">
            <i className={githubIconClass}></i>
          </a>
        </div>

        <div className="entry-container row">
          <div className="image-container col-4">
            <img className="image" src={props.imgsrc} alt="Project"></img>
          </div>
          <div className="text-container col-8">
            <ul className="details">
              {props.details.map((item) => (
                <ProjectEntryDetail key={item.id} text={item.text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEntry;
