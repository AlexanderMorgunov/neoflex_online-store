import Item from "../../comnponents/Item/Item";
import { headphones } from "../../resources/data";
import "./Catalog.css";

const Catalog = () => {
  const wiredHeadphones = headphones
    .filter((el) => el.type === "wired")
    .map(({ img, oldPrice = null, price, rate, title, type, id }) => {
      return (
        <Item
          img={img}
          oldPrice={oldPrice}
          price={price}
          rate={rate}
          title={title}
          type={type}
          key={id}
          id={id}
        />
      );
    });

  const wirelessHeadphones = headphones
    .filter((el) => el.type === "wireless")
    .map(({ img, oldPrice = null, price, rate, title, type, id }) => {
      return (
        <Item
          img={img}
          oldPrice={oldPrice}
          price={price}
          rate={rate}
          title={title}
          type={type}
          key={id}
          id={id}
        />
      );
    });

  return (
    <>
      <div className="catalog-item-title">Наушники</div>
      <div className="catalog-group-wrapper">{wiredHeadphones}</div>
      <div className="catalog-item-title">Беспроводные наушники</div>
      <div className="catalog-group-wrapper">{wirelessHeadphones}</div>
    </>
  );
};

export default Catalog;
