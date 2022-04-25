import React from 'react'
// import ItemListContainer from './ItemListContainer'
// import ItemsList from './ItemsList'

const Items = (props) => {

  
  return (
    <>
    <p>{props.imagen}</p>
    <p>{props.nombre}</p>
    <p> el precio es: $<span> {props.price}</span></p> <br></br>
 
  </>
  )
}

export default Items