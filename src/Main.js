import React from 'react'
import ItemListContainer from './Components/ItemListContainer'
import ItemCount from './ItemCount'


const saludos= "Hola a todos , Bienvenidos"
const onAdd="no hay stock"


const Main = () => {

  
  return (
    <>
    <ItemListContainer greeting={saludos}/> 
   <ItemCount stock={5} inicial={0} onAdd={onAdd} />
    </>
  )
}

export default Main