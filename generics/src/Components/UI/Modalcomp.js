import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom'

const ModalOverlay =(props)=>{
return (
    <div>
        <div>
            {props.children}
        </div>
    </div>
)
}
const portalElement = document.getElementById('overlay')

const Modalcomp = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalOverlay onClose={props.onClickhandle}>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  )
}

export default Modalcomp;
