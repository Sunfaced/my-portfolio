import React, { useEffect, useRef } from "react";
import "./cube.css"

const Cube = () => {
  const cubeRef = useRef(null);
  let rotateY = 0;

  const animate = () => {
    rotateY += 0.5; // увеличиваем угол вращения
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateY(${rotateY}deg)`;
    }
    requestAnimationFrame(animate); // вызываем анимацию снова
  };

  useEffect(() => {
    animate(); // запускаем анимацию при монтировании компонента
  }, []);

  return (

      <div className="cube" ref={cubeRef}>
        <div className="face front">HTML</div>
        <div className="face back">CSS</div>
        <div className="face left">JS</div>
        <div className="face right">REACT</div>
      </div>

  );
};

export default Cube;
