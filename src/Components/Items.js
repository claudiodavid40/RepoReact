import React from 'react'

const Items = ({producto}) => {
  return (
      <>
    <article>
    <h3> {producto.titulo}</h3>
     <img src={producto.imagen}/>
     <p>{producto.precio} </p>
     <button>Detalles</button>
    </article>
    </>
  )
}

export default Items