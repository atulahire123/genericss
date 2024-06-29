import React, { Fragment, useRef, useState } from 'react'
import { Button, Card, CardBody, Form } from 'react-bootstrap'
import classes from './Contactus.module.css'
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min'

const Contactus = () => {
    console.log('CONTACTUS COMPONENT')
  const nameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef('')

 const [isLeave, setIsLive] = useState(false)

  const submitHandler =(event)=>{
    event.preventDefault()
    const updateObj = {
            name : nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
            }
    console.log(updateObj)

    postRequest(updateObj)
    nameRef.current.value=''
    emailRef.current.value=''
    phoneRef.current.value=''
  }

  const postRequest =async(updateObj)=>{
        try{
            const response = await fetch('https://contact-ushttp-default-rtdb.firebaseio.com/contact.json',{
                method:'POST',
                body:JSON.stringify(updateObj),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await response.json()
            console.log(data)
        }catch(error){
            console.log(error)
        }
  }

  const isLiveHandle =()=>{
    // use prompt component for leaving another page accidentaly popup generate at the top in component leave me in this component
    setIsLive(true)
  }
    
  return (
    <Fragment>
    <Prompt when={isLiveHandle} message="Are you sure you want to leave? Your changes may not be saved." />
    <Form className='row justify-content-evenly mt-5' onSubmit={submitHandler}>
            <h1 className='text-center'>Contact us</h1>
            <Card style={{width:'30rem'}}>
                <CardBody>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter the name' ref={nameRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter the email'ref={emailRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type='tel' placeholder='Enter the phone number' ref={phoneRef}/>
                </Form.Group>
                <Button variant="primary" className={classes.button}  type="submit">
                    Submit
                </Button>
                </CardBody>
            </Card>
        </Form>
   </Fragment>
  )
}

export default Contactus
