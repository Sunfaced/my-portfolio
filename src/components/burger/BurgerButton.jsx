import "./burger.css";

const BurgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <button 
      className={`burger-button ${isOpen ? 'open' : ''}`} 
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BurgerButton; 