import React, { useEffect, useRef } from "react";
import "./cube.css"

const Cube = () => {
  const cubeRef = useRef(null);
  const rotateY = useRef(0);
  const requestId = useRef(null);

  const animate = () => {
    rotateY.current += 0.5; // увеличиваем угол вращения
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateY(${rotateY.current}deg)`;
    }
    requestId.current = requestAnimationFrame(animate); // сохраняем id анимации
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(animate); // запускаем анимацию при монтировании
    return () => cancelAnimationFrame(requestId.current); // очищаем при размонтировании
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
