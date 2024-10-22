import "./project.css";
import TheGame from "./../../images/TheGame.jpg"


const Project = ({title}) => {
  return (
    <>
      <li className="project">
        <a className="project-link" href="#">
          <img className="project-img" src={TheGame} alt="{title}" />
          <h3 className="project-title">{title}</h3>
        </a>
      </li>
    </>
  );
};

export default Project;
