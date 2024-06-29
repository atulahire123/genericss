import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../Store/Cart-context'

const NavButton = (props) => {
  const {cartItem} = useContext(CartContext)

  return (
    <Button variant='light' className='mx-auto' data-toggle="modal" onClick={props.onOpenHandle}>
      <span className='text-bold'>Your Cart{cartItem.length}</span>
    </Button>
  )
}

export default NavButton
