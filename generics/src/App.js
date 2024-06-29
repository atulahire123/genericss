import React,{  Suspense, useContext, useState } from 'react';
import Navbarheader from './Components/Layout/Header/Navbarheader';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import {Route, Redirect,Switch} from 'react-router-dom';
// import Store from './Components/Layout/Pages/Store';
// import Aboutus from './Components/Layout/Pages/Aboutus';
// import Home from './Components/Layout/Pages/Home';
// import Contactus from './Components/Layout/Pages/Contactus';
// import Login from './Components/Layout/Pages/Login';
import ProductDetail from './Components/Products/ProductDetail';
import { AuthContext } from './Components/Store/AuthContext/auth-context';
import CartProvider from './Components/Store/CartProvider';
import LoadingSpinner from './Components/UI/LoadingSpinner';

const Login = React.lazy(()=> import('./Components/Layout/Pages/Login'))
const Home = React.lazy(()=> import('./Components/Layout/Pages/Home'))
const Store = React.lazy(()=> import('./Components/Layout/Pages/Store'))
const Aboutus = React.lazy(()=> import('./Components/Layout/Pages/Aboutus'))
const Contactus = React.lazy(()=> import('./Components/Layout/Pages/Contactus'))




function App() {
  const [openCart, setOpenCart]=useState(false)
  const authContext = useContext(AuthContext)
  console.log(authContext)

  const openCartHandler =()=>{
    setOpenCart(true)
  }
  const closeCartHandler =()=>{
    setOpenCart(false)
  }


  return (
       <CartProvider>
            {openCart && <Cart onCloseHandler={closeCartHandler}/>}
            <Navbarheader onOpenCart={openCartHandler}/>
            <main>
              <Suspense 
              fallback={<div className='align-self-center'> 
                <LoadingSpinner/>
              </div>}>
            <Switch>
                  <Route exact path='/'>
                      <Home/>
                  </Route>
                  <Route path='/store'exact>
                      {authContext.isLoggedIn ? (<Store onOpenCarthandle={openCartHandler}/>) : (<Redirect to='/login'/>)}
                  </Route>
                  <Route path='/store/:productId' exact>
                      <ProductDetail/>
                  </Route>
                  <Route path='/about' exact>
                    <Aboutus/>
                  </Route>
                  <Route path='/contactus' exact>
                    <Contactus/>
                  </Route>
                 {!authContext.isLoggedIn && <Route path='/login' exact>
                    <Login/>
                  </Route>}
                  <Route path='*'>
                    <Redirect to= '/' />
                  </Route>
                </Switch>
                </Suspense>
            <Footer/>
          </main>
        </CartProvider>
  );
}

export default App;
