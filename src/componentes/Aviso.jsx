import React, { useEffect } from 'react'

export const Aviso = () => {
    useEffect(() => {
        alert('El componente se a montado.')

        return () => {
            alert('El componente se desamontado')
        }
    }, [])
  return (
    <div className='labe2'>
        <h3>Saludos Efren. Bienvenido.</h3>
        <button onClick={e => {
            alert('Bienvenido')
        }}>Mostrar Componente</button>
    </div>
  )
}
