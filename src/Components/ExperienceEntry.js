import "../css/ExperienceEntry.css";

const ExperienceEntry = (props) => {
  return (
    <div className="entry-card">
      <div className="title-container">
        <div className="company-name title">{props.company}</div>
        <div className="job-role">{props.role}</div>
      </div>
      <div className="details-container">
        <div className="details">
          {props.details.map((item) => (
            <li>{item.text}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEntry;
