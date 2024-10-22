import './contacts.css'
import MyPhoto from "./../images/My-photo.jpg"

const Contacts = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <img className="contact-photo" src={MyPhoto} alt="My photo" />
          <h1 className="title-1">Контакты для связи</h1>
          <ul className="contact-list">
            <li className="contact-list__item">
              <h2 className="contact-list__title">Локация</h2>
              <p>Санкт-Петербург</p>
            </li>
            <li className="contact-list__item">
              <h2 className="contact-list__title">Telegram / WhatsApp</h2>
              <p>+7(981)911-38-82</p>
            </li>
            <li className="contact-list__item">
              <h2 className="contact-list__title">Email</h2>
              <p>akoceryzhkin@gmail.com</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contacts;
