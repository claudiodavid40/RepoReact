import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {

const[contador,setContador]=useState(props.inicial)
  // const resultado=useState(0)
  // const contador=resultado[0]
  // const setContador=resultado[1]

  const clickbotonsuma=()=>{
    
    if(contador<10){
        setContador(contador+1)
    }
  }
  const clickbotonresta=()=>{
    if(contador>0){
    setContador(contador-1)
  }
  }
  const info=()=>{
    if(contador>props.stock){
        alert(props.onAdd)
    }else{
        alert("producto agregado")
    }
}
  return (
    <> 
    <div className='producto'>
            <div>
                aca va la imagffffn y las desccripcion
            </div>
            <div className='contador'>
            <button onClick={clickbotonsuma}>+</button>
            <p>{contador}</p>
            <button onClick={clickbotonresta}>-</button>
            </div>
            <button onClick={info} >agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount