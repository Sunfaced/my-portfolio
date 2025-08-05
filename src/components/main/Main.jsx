import "./main.css";

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main-section">
          <h1 className="main-section__title">FRONTEND</h1>
          <p className="scroll-container">
            <span className="scroll-text">HTML5, CSS3, JavaScript, ReactJS, TypeScript</span>
          </p>
          <blockquote>
            <p className="main-section__cite">
              Не волнуйтесь, если что-то не работает. Если бы всё работало, вас
              бы уволили
            </p>
            <figcaption><em>Mosher’s Law of Software Engineering</em></figcaption>
          </blockquote>
        </div>
      </div>
    </main>
  );
};

export default Main;
