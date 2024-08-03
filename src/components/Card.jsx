import "../styles/project.css";
export default function Card(props) {
  return (
    <div className="card-grid-space">
      <a
        className="project-card"
        href= {props.link}
        style={{ backgroundImage: props.backgroundImage }}
      >
        <h1>{props.title}</h1>
        <div className="tags">
          {props.tags.map((tag) => (
            <div className="tag">{tag}</div>
          ))}
        </div>
      </a>
    </div>
  );
}
