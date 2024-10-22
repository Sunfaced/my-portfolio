import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <ul className="footer-list">
            <li>
              <a href="https://vk.ru/feed">
                <img src="/src/images/vk.svg" alt="VK" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Sunfaced">
                <img src="/src/images/github.svg" alt="GITHUB" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aleksandrkocheryzhkin/">
                <img src="/src/images/instagram.svg" alt="INSTAGRAM" />
              </a>
            </li>
            <li>
              <a href="https://https://www.codewars.com/users/Sunfaced/">
                <img src="/src/images/codewars-icon-512x509-knvtsgna.png" alt="CODEWARS"/>
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
