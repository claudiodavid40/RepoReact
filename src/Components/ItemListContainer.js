import React, { useEffect, useState} from 'react'
import ItemList from './ItemList'

const productosiniciales=[{
    id:1,
    titulo:"remera",
    imagen:"https://via.placeholder.com/300x300",
    precio:26
},
{
    id:2,
    titulo:"pantalon",
    imagen:"https://via.placeholder.com/300x300",
    precio:26
},
{
    id:3,
    titulo:"saco",
    imagen:"https://via.placeholder.com/300x300",
    precio:26
},

]

const ItemListContainer = () => {



const[produ,setProduc]=useState([])
const[carg,setCargando]=useState(true)

useEffect(()=>{

    const promesa=new Promise((res)=>{
        setTimeout(()=>{
            res(productosiniciales) 
        },2000)

    })
    .then(()=>{
       
      setCargando(false) 
      setProduc(productosiniciales) 
    })

},[])

if (carg){
    return(<p> Cargando...</p>)
}
else {
    return (
        
         <ItemList productos={productosiniciales}/>
         
       )
}

 
}

export default ItemListContainer