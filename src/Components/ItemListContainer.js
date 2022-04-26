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

  const promesa=new Promise((res)=>{
    res(productobasedatos)

  })
  .then((contenido)=>{
    setTimeout(()=>{

      setProductos(productobasedatos) 
       },2000)
    console.log("salio todo bien")
  })
  .catch((error)=>{
    console.log("salio todo mal")

  })
    

},[])

  return (
   <div> 
    <ItemsList prod={productobasedatos}/> 
    </div> 
  )
}

export default ItemListContainer