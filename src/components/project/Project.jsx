import "./project.css";
import TheGame from "./../../images/TheGame.jpg"

const Project = ({title, img, gitHubLink, skills}) => {
  return (
    <>
      <li className="project">
        <a className="project-link" href={gitHubLink}>
          <img className="project-img" src={img} alt={title} />
          <h3 className="project-title">{title}</h3>
        </a>
      </li>
    </>
  );
};

export default Project;
