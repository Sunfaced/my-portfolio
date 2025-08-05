import { useState } from "react";
import "./project.css";

const Project = ({title, img, gitHubLink, skills}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <li className="project">
      <a className="project-link" href={gitHubLink} target="_blank" rel="noopener noreferrer" aria-label={`Открыть репозиторий ${title} на GitHub`}>
        <div className="image-container">
          {!imageLoaded && <div className="image-placeholder" />}
          <img
            className={`project-img ${imageLoaded ? 'loaded' : ''}`}
            src={img}
            alt={`Скриншот проекта ${title}` }
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-skills">{skills}</p>
      </a>
    </li>
  );
};

export default Project;
