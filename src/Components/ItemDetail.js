import React from 'react'

const ItemDetail = (props) => {

    return (
        <>
        <h1>aca esta el item detail</h1>
      <article>
      <h3> {props.titulo}</h3>
       <img src={props.imagen}/>
       <p>{props.precio} </p>
       
      </article>
      </>
    )
  }

export default ItemDetail