import React from 'react'
import ItemListContainer from './Components/ItemListContainer'
import ItemCount from './ItemCount'


const saludos= "Hola a todos , Bienvenidos"
const onAdd=()=>{
  
}


const Main = () => {

  
  return (
    <>
    <div className='productoDos'>
     
    <ItemCount stock={5} inicial={0} onAdd={onAdd} />
    </div>
    </>
  )
}

export default Main