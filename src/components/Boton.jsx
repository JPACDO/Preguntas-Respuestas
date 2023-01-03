import React from 'react'

export const Boton = ( { disabled, onClick, mensaje } ) => {
  return (
    <button disabled={disabled} onClick={onClick} >{mensaje}</button>
  )
}
