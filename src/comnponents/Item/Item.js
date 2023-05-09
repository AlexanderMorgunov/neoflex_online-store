import "./Item.css";
import { useContext } from "react";
import { BasketContext } from "../../providers/BasketProvider";
import { Link } from "react-router-dom";

const Item = ({ oldPrice, price, rate, title, type, img, id }) => {
  const { basket, setBasket } = useContext(BasketContext);
  const onBuyHandler = () => {
    basket.some((el) => el.id === id)
      ? setBasket(
          basket.map((el) => {
            if (el.id === id) {
              return {
                ...el,
                count: el.count + 1,
                price: price,
                img: img,
                title: title,
              };
            } else {
              return el;
            }
          })
        )
      : setBasket([
          ...basket,
          { id, count: 1, price: price, img: img, title: title },
        ]);
  };
  return (
    <div className="item-wrapper">
      <div className="item-image-container">
        <img src={img} alt={title} />
      </div>
      <div className="item-description-container">
        <div className="item-description-top">
          <div className="item-description-title">{title}</div>
          <div className="item-description-price">
            {price} ₽
            {oldPrice ? (
              <div className="item-description-oldPrice">{oldPrice} ₽</div>
            ) : null}
          </div>
        </div>
        <div className="item-description-bottom">
          <div className="item-description-rate">
            <img src="/icons/Star.svg" alt="" /> {rate}
          </div>
          {basket.some((el) => el.id === id) ? (
            <Link to={"ShoppingCart"}>
              <button className="item-description-btn">В корзину</button>
            </Link>
          ) : (
            <button
              className="item-description-btn"
              onClick={() => onBuyHandler()}
            >
              Купить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
