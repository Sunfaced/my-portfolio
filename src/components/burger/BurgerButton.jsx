import "./burger.css";

const BurgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <button 
      className={`burger-button ${isOpen ? 'open' : ''}`} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BurgerButton; 