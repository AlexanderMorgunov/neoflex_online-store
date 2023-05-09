import "./Header.css";
import { useContext } from "react";
import { BasketContext } from "../../providers/BasketProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { basket } = useContext(BasketContext);
  return (
    <header>
      <div className="Layout-label">
        <Link to={"/"}>QPICK</Link>
      </div>
      <div className="Layout-iconMenuGroup">
        <div className="Layout-heart">
          <img
            src="./icons/heart.svg"
            alt="heart"
            className="Layout-heart-img"
          />
          <div className="Layout-countCircle">2</div>
        </div>
        <div className="Layout-shopping_cart">
          <img src="./icons/shopping_cart.svg" alt="shopping_cart" />
          <div className="Layout-countCircle">
            {basket.reduce((sum, current) => sum + current.count, 0)}
            <Link to={"ShoppingСart"}>
              <div className="Layout-shopping_cart-sum">
                {basket.length
                  ? basket.reduce(
                      (sum, current) => sum + current.count * current.price,
                      0
                    ) + "₽"
                  : null}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
