import { useContext } from "react";
import { BasketContext } from "../../providers/BasketProvider";
import "./ShoppingCartItem.css";

const ShoppingCartItem = ({ img, title, price, count, id }) => {
  const { basket, setBasket } = useContext(BasketContext);

  const onChangeCountHandler = (num) => {
    num === -1
      ? basket.filter((el) => el.id === id)[0].count === 1
        ? setBasket((basket) => basket.filter((el) => el.id !== id))
        : setBasket(
            basket.map((el) => {
              if (el.id === id) {
                return { ...el, count: el.count - 1 };
              } else {
                return el;
              }
            })
          )
      : setBasket((basket) =>
          basket.map((el) => {
            if (el.id === id) {
              return { ...el, count: el.count + 1 };
            } else {
              return el;
            }
          })
        );
  };

  const onDeleteItem = () => {
    setBasket((basket) => basket.filter((el) => el.id !== id));
  };

  return (
    <div className="ShoppingCartItemWrapper">
      <div className="ShoppingCartItemInfo">
        <img src={img} alt="image" className="ShoppingCartItem-image" />
        <div className="ShoppingCartItem-description-wrapper">
          <div className="ShoppingCartItem-description">{title}</div>
          <div className="ShoppingCartItem-price">₽ {price}</div>
        </div>
        <span className="ShoppingCartItem-delete" onClick={onDeleteItem}></span>
      </div>
      <div className="ShoppingCartItem-calc">
        <div className="ShoppingCartBtnGroup">
          <button
            className="ShoppingCartBtn"
            onClick={() => onChangeCountHandler(-1)}
          >
            <div className="horizontal-line"></div>
          </button>
          {count}
          <button
            className="ShoppingCartBtn"
            onClick={() => onChangeCountHandler(1)}
          >
            <div className="horizontal-line"></div>
            <div className="vertical-line"></div>
          </button>
        </div>
        <div className="ShoppingCartItem-calc-total">{price * count} ₽</div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
