import React from "react";
import { Link } from 'react-router-dom'

import { CartContext } from '../context/cart'
// import { UserContext } from '../context/user'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItem from '../components/Cart/CartItem'

export default function Cart() {
  let user = false;
  const { cart, total } = React.useContext(CartContext)

  if (cart.length === 0) {
    return <EmptyCart />
  }

  return <section className="cart-items section">
    <h2>Your cart</h2>
    {cart.map(item => {
      return <CartItem key={item.id} {...item} />
    })}
    <h2>total: ${total}</h2>

    {
      user ?
        (<Link to='/checkout' className='btn btn-primary btn-block'>Checkout</Link>)
        :
        (<Link to='/login' className='btn btn-primary btn-block'>Login</Link>)
    }
  </section>
}
