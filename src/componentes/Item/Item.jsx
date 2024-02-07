import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div claseName='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p> ID: {id} </p>
        <p>Precio: {precio}</p>
        
        <link to={'/item/ $ {id}'}>Ver Detalles</link>
    </div>
  )
}

export default Item