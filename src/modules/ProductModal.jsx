
import Modal from 'react-modal';
import { API_URL } from '../const';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    padding: '0',
    maxWidth: '744px',
    backgroundColor: 'transparent',
  },
}

Modal.setAppElement('#root')
export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useCart();


  if (!data) {
    return null;
  }

const handleDecrease = () => {
  if (quantity >1) {
    setQuantity(quantity - 1);
  }
}
const handleIncrease = () => {

  setQuantity(quantity + 1);

}

const handleAddToCart = () => {
  addToCart(data, quantity);
  onRequestClose();
}

  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyle}
      contentLabel='Product Modal'
    >
      <div className='modal__row'>

        <button onClick={onRequestClose} className='modal__clouse'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5.71228" y="14.1975" width="12" height="1.5" transform="rotate(-45 5.71228 14.1975)" fill="#B8B8B8" />
            <rect x="14.1976" y="15.2582" width="12" height="1.5" transform="rotate(-135 14.1976 15.2582)" fill="#B8B8B8" />
          </svg>
        </button>
        <div className='modal__col modal__img'>
          <img className='modal__img-product' src={`${API_URL}${data.img}`} alt={data.title} />
        </div>

        <div className='modal__col modal__content'>
          <div className='modal__content-header'>
            <h2 className='modal__title'>{data.title}</h2>
            <p className='modal__price'>{data.price}</p>
          </div>
          <div className='modal__content-main'>
            <ul className='modal__additional modal-list'>
              {Object.entries(data.additional).map(([key, value]) => (
                <li className='modal-list__item' key={key}>
                  <strong className='modal-list__item-strong'>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          <div className='modal__content-footer '>
            <div className="cart-item__quantity modal__quantity" >
              <button onClick={handleDecrease} className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
              <input className="cart-item__quantity-input" type="number" value={quantity} readOnly />
              <button onClick={handleIncrease} className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
            </div>
            <button  onClick={handleAddToCart} className='cart__order-button modal__content-footer-button'>Добавить</button>
          </div>
        </div>

      </div>
    </Modal>
  )

};

