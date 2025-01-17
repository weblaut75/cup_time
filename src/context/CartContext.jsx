import { createContext, useContext, useEffect, useState } from "react";



const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(null);

  useEffect(() => {
    const storeCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storeCart)
  }, []);

  useEffect(() => {
    if (Array.isArray(cart)) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart]);

  const addToCart = (product, quantity) => {
    const newCart = [...cart];

    const indexItem = newCart.findIndex(item => item.id === product.id);

    if (indexItem >= 0) {
      newCart[indexItem].quantity += quantity;
    } else {
      newCart.push({ ...product, quantity })
    }


    setCart(newCart);
  };


  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }


  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(
        cart.map(item => item.id === productId ? { ...item, quantity } : item),
      );
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);