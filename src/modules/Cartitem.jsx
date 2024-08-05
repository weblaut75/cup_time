import { API_URL } from "../const";

export const Cartitem = ({ data }) => (
  <li className="cart-item">
    <img className="cart-item__img" src={`${API_URL}${data.img}`} alt={data.title} />
    <div className="cart-item__info">
      <h3 className="cart-item__title product__title">{data.title}</h3>
      <div className="cart-item__quantity">
        <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
        <input className="cart-item__quantity-input" type="number" value={data.quantity} />
        <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
      </div>
      <p className="cart-item__price">{data.price * data.quantity}&nbsp;₽</p>
    </div>
  </li>
)