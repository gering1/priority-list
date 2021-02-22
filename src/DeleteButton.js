import React from 'react'
import {FaTimes } from 'react-icons/fa'


const DeleteButton = ({id,removeItem}) => {
  
    return (
        <FaTimes size = {23} onClick = {() => removeItem(id)}style = {{ color: 'red', cursor: 'pointer'}}></FaTimes>
    )
}

export default DeleteButton
