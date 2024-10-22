import "./project.css";

const Project = ({title}) => {
  return (
    <>
      <li className="project">
        <a className="project-link" href="#">
          <img className="project-img" src="/src/images/TheGame.jpg" alt="{title}" />
          <h3 className="project-title">{title}</h3>
        </a>
      </li>
    </>
  );
};

export default Project;
