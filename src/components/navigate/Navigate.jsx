import "./navigate.css";
import Cube from "../cube/Cube";

import { NavLink } from "react-router-dom";
import Contacts from "../../pages/Contacts";
import Projects from "../../pages/Projects";

// Навигация по проекту

export const Navigate = () => {

  // const listItems = ["Главная", "Проекты", "Контакты"];

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-menu">
          <a className="nav-cube" href="#">
            <Cube />
          </a>
          <ul className="nav-bar">
            {/* {listItems.map((item, index) => (
              <li key={index} className="nav-bar__item">
                <a href="#">
                  {item}
                </a>
              </li>
            ))} */}
            
            <li>
              <NavLink className='nav-link' to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to="/projects">Проекты</NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to="/contacts">Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
