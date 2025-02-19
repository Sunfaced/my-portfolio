import { useState, useEffect } from "react";
import "./navigate.css";
import Cube from "../cube/Cube";
import BurgerButton from "../burger/BurgerButton";
import { NavLink } from "react-router-dom";
import Contacts from "../../pages/Contacts";
import Projects from "../../pages/Projects";

// Навигация по проекту

export const Navigate = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Блокируем прокрутку при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      document.querySelector('.nav').classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
      document.querySelector('.nav')?.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
      document.querySelector('.nav')?.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <nav className={`nav ${isOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="nav-menu">
          <a className="nav-cube" href="#">
            <Cube />
          </a>
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <ul className={`nav-bar ${isOpen ? 'open' : ''}`}>
            <li>
              <NavLink 
                className="nav-link" 
                to="/my-portfolio"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="nav-link" 
                to="/my-portfolio/projects"
                onClick={() => setIsOpen(false)}
              >
                Проекты
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="nav-link" 
                to="/my-portfolio/contacts"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
