import React, { useContext, useState } from 'react'
import { Container, Nav,  Navbar , Button} from 'react-bootstrap'
import NavButton from './NavButton'
import classes from './Navbarheader.module.css'
import  {NavLink}  from 'react-router-dom'
import { AuthContext } from '../../Store/AuthContext/auth-context'


const Navbarheader = (props) => {
  const [navState, setNavState] = useState('/')
  const authCtx = useContext(AuthContext)
  
  const NavigateSummary =(Route)=>{
    setNavState(Route)
    // console.log('NAVIGATESUMMARY FALSE')
  }

  const isNavigate= ()=>{
    setNavState(true)
  }
  
  const onlogoutHandler = ()=>{
    authCtx.LogOut()
  }


  // console.log(props)
  return (
    <>
        <Navbar bg='dark' expand='sm' variant='dark' sticky="top" className={classes.height}>
            <Container>
                <Navbar.Brand href='/' className='justify-content-left'>
                    React-Ecomerse
                </Navbar.Brand>
                  <Nav className='mx-auto '>
                    <Nav.Item>
                      <NavLink to='/'  exact className='nav-link mx-5' onClick={()=>NavigateSummary('/')}>HOME</NavLink>
                    </Nav.Item> 
                   {authCtx.isLoggedIn && (
                     <Nav.Item>
                       <NavLink to='/store'  className='nav-link mx-5' onClick={()=>NavigateSummary('store')}>STORE</NavLink>
                     </Nav.Item>
                    )}
                    <Nav.Item>
                      <NavLink to='/about' className='nav-link mx-5'  onClick={isNavigate}>ABOUTUS</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                      <NavLink to='/contactus' className='nav-link mx-5'  onClick={isNavigate}>CONTACTUS</NavLink>
                    </Nav.Item>
                    {!authCtx.isLoggedIn ? (
                        <Nav.Item>
                            <NavLink to='/login' className='nav-link'>LOGIN</NavLink>
                        </Nav.Item>
                    ) : (
                        <Nav.Item>
                            <Button onClick={onlogoutHandler}>LOGOUT</Button>
                        </Nav.Item>
                    )}
                  </Nav>
            </Container>
          {authCtx.isLoggedIn && <NavButton onOpenHandle={props.onOpenCart}/>}
        </Navbar>
     
        <div>
         {navState !== '/' &&   
         <>
          { console.log('Navigate The GENERICS')}
             <div className='bg-info-subtle p-5'>
               <Container className='text-center pb-5' >
                  <h1 className={classes.bodyheader}>The Generics</h1>
               </Container>
           </div>
         </>
         }
        </div>
    </>
  )
}

export default Navbarheader;
