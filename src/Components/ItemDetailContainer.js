import React, { useEffect, useState} from 'react'
// import React from 'react'
import ItemDetail from './ItemDetail'


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


const ItemDetailContainer = () => {

    const[producto,setProducto]=useState({})
    const[cargando,setCargando]=useState(true)

    useEffect(()=>{
        const promesa=new Promise((res)=>{
            setTimeout(()=>{
                res(productosiniciales)
            },2000)
            })
        
            .then(()=>{
                    setCargando(false)
                    setProducto(productosiniciales)
                    
                 
            })

    },[])

   if(cargando) {
    return (<p>cargando...</p>)
   }else{
       return(
           <ItemDetail key={productosiniciales[0].id} 
           imagen={productosiniciales[0].imagen}
            titulo={productosiniciales[0].titulo} 
            precio={productosiniciales[0].precio} />
       )
   }
  
}

export default ItemDetailContainer