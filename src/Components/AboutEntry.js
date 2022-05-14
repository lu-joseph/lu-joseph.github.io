import "../css/AboutEntry.css";

const AboutEntry = (props) => {
  return (
    <div>
      <ul className="details-list">
        {props.details.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutEntry;
