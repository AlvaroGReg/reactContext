import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {

  const {usuario} = useContext(PruebaContext)

  return (
    <div>
    <h1>Contacto</h1>
    <p>Página de contacto.</p>
    <p>Valor compartido: {
      usuario.nombre} {usuario.apellido}</p>
  </div>
  )
}
