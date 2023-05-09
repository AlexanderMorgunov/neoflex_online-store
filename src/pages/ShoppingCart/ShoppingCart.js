import { useContext } from "react";
import { BasketContext } from "../../providers/BasketProvider";
import ShoppingCartItem from "../../comnponents/ShoppingСartItem/ShoppingСartItem";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { basket } = useContext(BasketContext);

  const elements = basket.map(({ id, img, price, count, title }) => {
    return (
      <ShoppingCartItem
        img={img}
        id={id}
        key={id}
        count={count}
        price={price}
        title={title}
      />
    );
  });

  return (
    <div className="ShoppingCart-wrapper">
      <div className="ShoppingCart-label">Корзина</div>
      {elements.length ? (
        <div className="ShoppingCart-order">
          <div className="ShoppingCart-order-items">{elements}</div>
          <div className="ShoppingCart-order-calc">
            <div className="ShoppingCart-order-calc-wrapper-top">
              <div className="ShoppingCart-order-calc-label">Итого</div>
              <div className="ShoppingCart-order-calc-result">
                ₽{" "}
                {basket.reduce((sum, curr) => sum + curr.price * curr.count, 0)}
              </div>
            </div>
            <button className="ShoppingCart-order-calc-btn">
              Перейти к оформлению
            </button>
          </div>
        </div>
      ) : (
        <div className="ShoppingCart-order-empty">
          <div>Корзина пуста</div>
          <Link to={"/"}>На главную</Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
