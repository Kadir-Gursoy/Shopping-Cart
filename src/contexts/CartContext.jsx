import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addToCart = (id, product) => {
        const newItem = { ...product, amount: 1 }
        const existingItemIndex = cart.findIndex(item => item.id === id)

        if (existingItemIndex !== -1) {
            const newCart = [...cart]
            newCart[existingItemIndex].amount =+ 1
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }
         
const increaseAmount = (id) => {
const updateItem = cart.find(item=> item.id === id)
addToCart(updateItem.id)
}


const decreaseAmount = () => {
    const existingItemIndex = cart.findIndex(item => item.id === id)
    
        const newCart = [...cart]
        const amount = newCart[existingItemIndex].amount 
        amount > 1 ? (newCart[existingItemIndex].amount  -=1 ) :
        setCart(newCart)
    } 
}
const deleteFromCard = (id) => {
    const updateCart = cart.filter((item=> item.id !==id))
    setCart(upodate)
}
    const values = { addToCart,cart, increaseAmount, decreaseAmount, deleteFromCard }
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;



export default CartProvider;

export const useCartContext = () => {
    return useContext(CartContext)
}
