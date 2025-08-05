import { useState, useEffect, useRef } from "react";
import "./navigate.css";
import Cube from "../cube/Cube";
import BurgerButton from "../burger/BurgerButton";
import { NavLink } from "react-router-dom";


// Навигация по проекту

export const Navigate = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Блокируем прокрутку при открытом меню
  useEffect(() => {
    const navEl = navRef.current;

    // функция для закрытия меню по Esc
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', escHandler);

    if (isOpen) {
      document.body.classList.add('menu-open');
      navEl?.classList.add('menu-open');
      // фокусируем первый пункт меню
      const firstLink = navEl?.querySelector('.nav-bar a');
      firstLink && firstLink.focus();
    } else {
      document.body.classList.remove('menu-open');
      navEl?.classList.remove('menu-open');
    }
    
    return () => {
      document.removeEventListener('keydown', escHandler);
      document.body.classList.remove('menu-open');
      navEl?.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className={`nav ${isOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="nav-menu">
          <NavLink 
            className="nav-cube" 
            to="/" 
            aria-label="На главную"
            onClick={() => setIsOpen(false)}>
            <Cube />
          </NavLink>
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <ul className={`nav-bar ${isOpen ? 'open' : ''}`}>
            <li>
              <NavLink 
                className="nav-link" 
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="nav-link" 
                to="/projects"
                onClick={() => setIsOpen(false)}
              >
                Проекты
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="nav-link" 
                to="/contacts"
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
