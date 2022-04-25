 import { useState, useEffect } from 'react'
 import ItemsList from './ItemsList'


const productobasedatos=[
  {id:"1",
   name:"remera Polaca",
   price:300,
   image:"aca va la imagen"
  },
   {
    id:2,
    name:"remera rusa",
   price:400,
  image:"aca va la imagen"}
  ]


 const ItemListContainer = () => {

 const[prod,setProductos]=useState([])

useEffect(()=>{

    setTimeout(()=>{

    setProductos(productobasedatos) 
    },1000)

},[])

  return (
   <div> 
    <ItemsList prod={productobasedatos}/> 
    </div> 
  )
}

export default ItemListContainer