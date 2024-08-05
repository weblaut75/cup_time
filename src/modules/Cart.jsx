import { useCart } from "../context/CartContext";
// import { products } from "../products";
import { Cartitem } from "./Cartitem";

export const Cart = () =>{
  const {cart} = useCart()
  return(
    <section className="cart">
    <div className="container cart__container">
      <h2 className="cart__title">Корзина (6)</h2>

      <ul className="cart__items">
        {cart.map((item) => (<Cartitem key={item.id} data={item} />))}
      </ul>

      <div className="cart__summary">
        <h3 className="cart__summary-title">Итого:</h3>
        <p className="cart__total">2200&nbsp;₽</p>
        <button className="cart__order-button">Заказать</button>
      </div>
    </div>
  </section>
  )
} 
