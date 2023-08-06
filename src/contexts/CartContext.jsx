import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addToCart = (id, product) => {
        const newItem = { ...product, amount: 1 }
        const existingItemIndex = cart.findIndex(item => item.id === id)

        if (existingItemIndex !== -1) {
            const newCart = [...cart]
            newCart[existingItemIndex].amount += 1
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }


    const values = { addToCart,cart }
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};


export default CartProvider;

export const useCartContext = () => {
    return useContext(CartContext)
}
