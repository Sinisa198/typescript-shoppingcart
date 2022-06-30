import { Link } from "react-router-dom";

const FavoriteItem = (item: any, remove: any) => {
  return (
    <div className="row-cart__favorite">
      <div key={item.id} className="cart__item">
        <div className="cart__item-body-image">
          <img src={item.image} alt="" className="cart__item-img" />
        </div>
        <div className="cart__item-details">
          <span className="cart__item-name">{item.name}</span>
        </div>
        <div className="cart__item-button">
          <Link
            className="btn btn--sm"
            to=""
            onClick={(event) => remove(event, item)}
          >
            REMOVE FROM CART
          </Link>
        </div>
        <div className="cart__item-price"></div>
      </div>
    </div>
  );
};
export default FavoriteItem;
