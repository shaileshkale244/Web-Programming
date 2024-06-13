import React from 'react'

const ShowProduct = (props) => {
  return (
    <div>
        <h3>ID : {props.prod.pid}</h3>
        <h3>NAME : {props.prod.pname}</h3>
        <h3>QTY : {props.prod.qty}</h3>
        <h3>PRICE : {props.prod.price}</h3> 
    </div>
  )
}

export default ShowProduct