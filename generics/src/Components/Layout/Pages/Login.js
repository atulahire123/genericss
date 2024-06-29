import React, { Fragment, useRef , useContext} from 'react'
import { Button, Card, CardBody, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../../Store/AuthContext/auth-context'

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useHistory()
    const authCtx= useContext(AuthContext)

    const onSubmitHanlder =(event)=>{
        event.preventDefault()
        const Email = emailRef.current.value;
        const Password = passwordRef.current.value;
        
        const enteredCredential={
            Email:Email,
            Password:Password,
        }
        localStorage.setItem('email', JSON.stringify(Email))
        console.log('EXECUTE',enteredCredential)
        FirebaseFetchLoginData(enteredCredential)
    }

    const FirebaseFetchLoginData =(enteredCredential)=>{
        fetch('https://console.firebase.google.com/project/react-ecommerce-1e874/database/react-ecommerce-1e874-default-rtdb/data/~2F', 
        {
           method:'POST',
           body:JSON.stringify({
            email: enteredCredential.Email,
            password: enteredCredential.Password,
            returnSecureToken:true
           }),
           headers:{
            'Content-Type' : 'application/json'
           }
        })
        .then((res)=>{
            if(res.ok){
                return res.json()
                //if successfull request render
            }else{
                throw new Error('Authentication Failed.')
            }
          })
         .then((data)=>{
                console.log('Login SUCCESFULL',data.idToken)
                // alert('login Succesfull')
                authCtx.LogIn(data.idToken)
                navigate.replace('/store')
                })
                .catch((error)=>{
                    alert(error.message)
                })
    }



  return (
    <Fragment>
        <div className='row justify-content-evenly mt-5'  >
            <Card style={{width:'30rem'}}>
                 <Card.Text className='text-center fs-2 fw-bolder'>LogIn</Card.Text>
                <CardBody>
                    <Form onSubmit={onSubmitHanlder}>
                     <Form.Group className="mb-2" controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                     </Form.Group>
                     <div className="text-center">
                        <Button type="submit" className="btn btn-primary md-4" >SignIn</Button>
                     </div>
                     </Form>
                </CardBody>
            </Card>
        </div>
   </Fragment>
  )
}

export default Login
