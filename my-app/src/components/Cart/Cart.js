import React, { useContext } from 'react';

import '../Cart/Cart.css';
import '../CartButton/CartButton.js';
import '../../Context/AppContext';
import '../../utils/formatCurrency';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../Context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
