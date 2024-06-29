import React from 'react'
import { Button, Container } from 'react-bootstrap'
import classes from './Home.module.css'
import Title from '../../UI/Title'
import Albumlist from './Album/Albumlist'

const Home = (props) => {
    console.log('HOME COMPONENT')
  return (
        <>
           <div className='bg-info-subtle p-5'>
            <Container className='text-center pb-5' >
                <h1 className={classes.bodyheaders}>The Generics</h1>
                   <div className='justify-content-center' style={{margin:'0', display:'flex', flexDirection:'column',alignItems:'center' , paddingTop:'5px'}}>
                      <Button className="w-25 text-flex text-center align-item-center fs-3 m-2" variant="outline-dark">
                          Get Our Latest Album
                      </Button>
                    <span className="m-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            fill="currentColor"
                            className="bi bi-play-circle"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                        </svg>
                    </span>
                    </div>
            </Container>
        </div>
         <Title>Tours</Title>
              <Albumlist/>
        </>
        )
    
//   )
}

export default Home
