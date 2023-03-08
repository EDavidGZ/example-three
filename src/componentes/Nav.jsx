import React from 'react'

const Nav = () => {

    const name = 'Efren';
    let web = 'Vercel_Efren.com'

    let usuario = {
        nombre: 'Efren',
        apellidos: 'Garza',
        web: 'Vercel_Efren.com'
    }


  return (
    <div className='app-nav'>
        <h3>Datos del usuario</h3>
        <ul>
            <li>Nombre: {usuario.nombre}</li>
            <li>Apellido: {usuario.apellidos}</li>
            <li>Web: <strong>{usuario.web}</strong></li>
        </ul>




    </div>
  )
}

export default Nav