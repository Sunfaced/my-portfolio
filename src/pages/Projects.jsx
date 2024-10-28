import Project from "../components/project/Project";

import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title">Проекты</h2>
          <ul className="projects">
            {projects.map((elem, index) => {
              return (
                <Project
                  key={index}
                  title={elem.title}
                  img={elem.img}
                  gitHubLink={elem.gitHubLink}
                  skills={elem.skills}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
