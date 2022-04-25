import React from 'react'

 import Items from './Items'


const ItemsList = ({prod}) => {
// const[primero]=prod
//   const{id:id,name:name}=primero
  return (
    <>
    {/* <h1>{primero.name}</h1> */}
      { 
      prod.map((producto)=>{
        return <Items id={producto.id} nombre={producto.name} price={producto.price} imagen={producto.image} />
       
      })
      }  
      
    </>
  )
}

export default ItemsList