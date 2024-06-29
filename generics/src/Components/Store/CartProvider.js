import React, { useEffect, useState } from 'react'
import { CartContext } from './Cart-context'
import axios from 'axios';

const CartProvider = (props) => {

const [dummyData, setDummyData] = useState([
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity:30
  },
  {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity:20
  },
  {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity:10
  },
  {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
  {
    id:5,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
  {
    id:6,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
  {
    id:7,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
  {
    id:8,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
])
const [cartItems, setCartItems]= useState([])
let email = localStorage.getItem('email')
if(email){
  email = email.replace(/[@.""]/g, "");
}
console.log(email)

const url = `https://crudcrud.com/api/c02233607f56470e96d8f086946c30ba/cart${email}`;

useEffect(()=>{

  axios.get(url)
      .then((res)=>{
        console.log('data retrived', res.data)
        setCartItems(res.data)
      })
      .catch(error => {
        console.error('Error occurred:', error);
    });
},[])
 
const addToCartItemshandler=(item)=>{
 
  setCartItems((prevCartItems) => {
    const updatedCartItems = [...prevCartItems, item];
    return updatedCartItems;
  });
  // console.log(item)
  
  axios.post(url, item)
    .then((response) => {
        console.log('fetch successful:', response.data);
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });

}

const removeCartHandler=(item)=>{
    
  const updateRemainItem = cartItems.filter((items)=> items._id !== item._id)
    setCartItems(updateRemainItem)
    // console.log(updateRemainItem)

    axios.delete(`${url}/${item._id}`)
    .then((res)=>{
        console.log('DELETE DATA',res.data)
    })
    .catch((error)=>{
      console.log('Error occured',error)
    })

}

const addProductDetails =()=>{

}
 

const contextVal ={
    item:[],
    cartItem:cartItems,
    dummyItem: dummyData,
    onAddProductDetail:addProductDetails,
    addCartItem:addToCartItemshandler,
    removeCartItem:removeCartHandler,
    
}
// console.log(contextVal,contextVal.isCart)

  return (
    <CartContext.Provider value={contextVal}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
