import React, { useContext } from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import { CartContext } from '../Store/Cart-context'
import Title from '../UI/Title'
import {Row, Col ,Button, Card,  Container} from 'react-bootstrap';
import classes from './ProductDetail.module.css';


const ProductDetail = (props) => {
    //use params hook is return object of the current url
    const params = useParams()
    const cartCtx = useContext(CartContext)
    // this history hook is used to replace url to current url and rdirect to another page
    const history = useHistory()
    const match = useRouteMatch()

    console.log(match)
    console.log(cartCtx)
    console.log('params', params.productId)

    const ProductDetail = cartCtx.dummyItem.find(p => p.id === parseInt(params.productId));
  
    // console.log(findSpecificProduct)
    const AddToCart=(item)=>{
      cartCtx.addCartItem(item)
    }
    const BuyItem =()=>{
      history.push('/store')
    }

  return (
    <>
      <Container fluid>
      <Title>Product Details</Title>
       <Card className='md-4'  style={{width:'75rem', marginLeft:'5rem', marginRight:'50rem', maxHeight:'50rem'}}>
        <Row>
          <Col xs={6} sm={5}>
            <img src={ProductDetail.imageUrl} className={classes.img} alt="Product" />
          </Col>
          <Col xs={9} sm={5}>
            <Card.Body className='postion-relative'>
              <Card.Title>{ProductDetail.title}</Card.Title>
              <Card.Text className='fw-bold m-2 fs-4'>
                <span className='m-4 text-danger'>Price: ${ProductDetail.price}</span>
                <span className='gap-10'>Quantity: {ProductDetail.quantity}</span>
              </Card.Text>
              <div className='btn justify-content-end'>
                <Button className='btn m-1' variant='secondary' onClick={() => AddToCart(ProductDetail)}>Add to Cart</Button>
                <Button className='btn m-1' variant='primary' onClick={()=> BuyItem() }>Buy Now</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card> 
    </Container>
    </>
  )
}

export default ProductDetail
