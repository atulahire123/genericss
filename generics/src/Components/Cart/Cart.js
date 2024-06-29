import React, { useContext } from 'react'
import { Button, Container, Modal,  Table } from 'react-bootstrap'
import classes from './Cart.module.css'
import { CartContext } from '../Store/Cart-context';

const Cart = (props) => {
  
  const {removeCartItem,cartItem} = useContext(CartContext)
  // console.log(removeCartItem,cartItem)

  const onRemoveHandler = (item) => { 
      removeCartItem(item)
  }

  const updateQuantity =(event)=>{
    console.log(event.target.value)
  }

  const TotalAmount = cartItem.reduce((total, currvalue )=>{
    return total + currvalue.price * currvalue.quantity
  },0)

  const hardcodedList = cartItem.map((item, index) => (
    <tr key={index}>
      <td>
        <img src={item.imageUrl} alt='images' className={classes.img} />
        <span>{item.title}</span>
      </td>
      <td>{item.price}</td>
      <td>
          <input type='number' defaultValue={item.quantity} onChange={updateQuantity} className={classes.input}/>
          <Button onClick={() => onRemoveHandler(item)}>Remove</Button>
      </td>
    </tr>
  ));

  return (
    <Container className='z-1 position-fixed' style={{ right: '-24%', top: '4rem', height: '100rem' }}>
      <div className=" modal show" style={{ display: 'block', position: 'relative' }}>
        <Modal.Dialog>
          <Modal.Header closeButton onClick={props.onCloseHandler}>
            <Modal.Title>Cart List</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: 'calc(95vh - 300px)', overflowY: 'auto' }}>
            <Table responsive='md' className='table'>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {hardcodedList}
                <tr>
                  <td className='text-end' colSpan={2}>
                    <h5>TotalAmount</h5>
                  </td>
                  <td>${TotalAmount}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Purchase</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </Container>
  );
}

export default Cart;