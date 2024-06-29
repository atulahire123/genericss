import React from 'react'

const Title = (props) => {
  return (
    <h1 className="text-center m-4"
        style={{ fontFamily:'Metal Mania', fontWeight:'bold' }}>
        {props.children}
    </h1>
  )
}

export default Title
