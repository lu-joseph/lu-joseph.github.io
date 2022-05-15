import ProjectEntryDetail from "./ProjectEntryDetail";
import "../css/ProjectEntry.css";

const ProjectEntry = (props) => {
  const iconVisibility = props.Github === "" ? " invisible" : "";
  const githubIconClass = "fa fa-github" + iconVisibility;
  return (
    <div className="project-entry">
      <div className="entry-card">
        <div className="title-container row">
          <div className="col-3"></div>
          <a className="col-6" href={props.Github}>
            <div className="title">{props.title}</div>
          </a>
          <div className="icon-container col-3 remove-padding">
            <a href={props.Github}>
              <i className={githubIconClass}></i>
            </a>
          </div>
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
