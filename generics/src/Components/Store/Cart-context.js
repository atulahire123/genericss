import React from "react";

export const CartContext = React.createContext({
    item:[],
    dummyItem:[],
    cartItem:[],
    removeCartItem:(item)=>{},
    addCartItem:()=>{},
    onAddProductDetail:()=>{},
})