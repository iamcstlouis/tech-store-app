// cart context
import React from 'react'
import localCart from '../utils/localCart'

const CartContext = React.createContext();
// createContext gives context to Provider, Consumer, useContext()

function CartProvider({ children }) {
    const [cart, setCart] = React.useState(localCart);
    const [total, setTotal] = React.useState(0);
    const [cartItems, setCartItems] = React.useState(0);

    // props - instead of cart: cart, total: total, cartItems: cartItems. ES6 shortcut cart, total, cartItems
    return <CartContext.Provider value={{ cart, total, cartItems }}>
        {children}
    </CartContext.Provider>
}

// named exports
export { CartContext, CartProvider }