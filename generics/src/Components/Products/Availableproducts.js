import React, { Fragment,  useContext } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../Store/Cart-context';
import Title from '../UI/Title';
import classes from './Availableproducts.module.css'
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

//URLSearchParams is work as base on btn click URL Changes and ascending or descending order of URL
const sortItems = (Items, ascending) =>{
  return Items.sort((ItemA, ItemB)=>{
    if(ascending){
      return ItemA.id > ItemB.id ? 1 : -1;
    }else{
      return ItemA.id < ItemB.id ? 1 : -1;
    }
  })
}


const Availableproducts = (props) => {
  const history = useHistory()
  const location = useLocation()
  const ctxData = useContext(CartContext)

// console.log(location)
  const AddToCartItemHandler =(item)=>{
    // console.log(item)
    ctxData.addCartItem(item)
  }

  const queryParams = new URLSearchParams(location.search)

  const isSortAscending = queryParams.get('sort') === 'asc';

  const sortedItems = sortItems(ctxData.dummyItem, isSortAscending)

  const changeSortingHandler =()=>{
    // it is more convinient
    history.push({
      pathname:location.pathname,
      search :`?sort=${(isSortAscending ? 'desc' : 'asc')}`
    })

    // history.push(`${location.pathname}?sort=${(isSortAscending ? 'desc' : 'asc')}`)
  }


  const listOfProducts = sortedItems.map((item) => (
    <Col  className='p-4 col-md-3' key={item.id} >
        <Card className='d-flex flex-column shadow' style={{ overflow:'hidden'}}>
        <NavLink to={`${location.pathname}/${item.id}`} exact>         
          <Card.Img variant='top' className={classes.img} src={item.imageUrl} />
        </NavLink>
            <Card.Body className='flex-grow-2'>
              <Card.Title>
                <span>{item.title}</span> 
                </Card.Title>
              <Card.Text className='fw-bold'>
                <span>Price: ${item.price}</span>
                </Card.Text>
                <div className='d-flex justify-content-end align-item-center'>
                  <Button variant="primary" className="flex-grow-2" onClick={AddToCartItemHandler.bind(null,item)}>AddToCart</Button>
                </div>
            </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Fragment>
     
        <Title>Music</Title>
        <Button onClick={changeSortingHandler}>Sorting {isSortAscending ? 'Decending' : 'Ascending'}</Button>
        <Container className="d-flex p-10">
            <Row>
                {listOfProducts}
            </Row>
            
        </Container>
        <div className='mx-auto text-center '>
          <Button className='btn m-5 b-1' onClick={props.onOpenCarthandler}>SeeTheCart</Button>
        </div>
    </Fragment>
  );
};

export default Availableproducts;
