import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [sepetIcon, setSepetIcon] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        const sumAmount = cart.reduce((acc, currentItem)=> {
            return acc + currentItem.amount
        },0)
    setSepetIcon(sumAmount)

        const total = cart.reduce((acc, currentItem)=>{
            return acc + currentItem.price * currentItemamount
        },0)
        setTotal(total)

    }, [cart])
    


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


const decreaseAmount = (id) => {
    const existingItemIndex = cart.findIndex(item => item.id === id)
    const newCart = [...cart]
    if (newCart[existingItemIndex].amount === 1) {
        deleteFromCart(id)
    } else {
        newCart[existingItemIndex].amount -= 1
        setCart(newCart)
    }

}
}
        const deleteFromCard = (id) => {
         setCart(cart.filter((item=> item.id !==id)))
   
}
    const values = { addToCart, cart, increaseAmount, decreaseAmount, deleteFromCard, setSepetIcon }
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;



export default CartProvider;

export const useCartContext = () => {
    return useContext(CartContext)
}
