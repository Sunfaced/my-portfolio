import "./header.css";
export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-info">
            <h1 className="header-title">
              <strong>Привет, меня зовут Александр</strong>
              <br />
              junior frontend разработчик
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
