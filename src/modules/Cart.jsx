import { useCart } from "../context/CartContext";
// import { products } from "../products";
import { Cartitem } from "./Cartitem";
import { Skeletonloader } from "./SkeletonLoader";

export const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart ? cart.reduce(
    (acc, item) => item.quantity * item.price + acc,
    0,
    ) : 0;


  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина ({cart.length})</h2>

        <ul className="cart__items">
          {cart ? (
            cart.map((item) => <Cartitem key={item.id} data={item} />)
            ) : (
              <Skeletonloader />
            )}
        </ul>

        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__total">{totalPrice}&nbsp;₽</p>
          <button className="cart__order-button">Заказать</button>
        </div>
      </div>
    </section>
  )
}

