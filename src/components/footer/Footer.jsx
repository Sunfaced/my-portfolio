import "./footer.css";
import codewars from "./../../images/codewars.png"
import github from "./../../images/github.svg"
import VK from "./../../images/vk.svg"
import instagram from "./../../images/instagram.svg"


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <ul className="footer-list">
            <li>
              <a href="https://vk.ru/feed">
                <img src={VK} alt="VK" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Sunfaced">
                <img src={github} alt="GITHUB" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aleksandrkocheryzhkin/">
                <img src={instagram} alt="INSTAGRAM" />
              </a>
            </li>
            <li>
              <a href="https://https://www.codewars.com/users/Sunfaced/">
                <img src={codewars} alt="CODEWARS"/>
              </a>
            </li>
          </ul>
          <div className="footer-list__copy">
            2024 &copy; akoceryzhkin@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
