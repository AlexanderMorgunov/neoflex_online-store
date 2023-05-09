import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-label">QPICK</div>
      <nav>
        <ul>
          <li>
            <a href="#">Избранное</a>
          </li>
          <li>
            <Link to={"ShoppingCart"}>Корзина</Link>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li>
            <a href="#">Условия сервиса</a>
          </li>
          <div className="Footer-lang">
            <img src="./icons/Earth.svg" alt="Earth" />
            <li className="Footer-lang-rus Footer-lang-text">Каз</li>
            <li className="Footer-lang-rus Footer-lang-text">Рус</li>
            <li className="Footer-lang-eng Footer-lang-text">Eng</li>
          </div>
        </ul>
      </nav>
      <div className="socialMediaWrapper">
        <a href="#">
          <img src="./icons/VK.svg" alt="vk" />
        </a>
        <a href="#">
          <img src="./icons/Telegram.svg" alt="telegram" />
        </a>
        <a href="#">
          <img src="./icons/Whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
