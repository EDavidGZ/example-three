import React from 'react'

const Header = () => {

    const libros = ['HARRY POTTER', 'Game of throns', 'Clean code'];

  return (
    <div>
        <h1>Listado de libros</h1>
        { libros.length >= 1 ? 
        (<ul>
            {
                libros.map((libro, indice) => {
                    return <li key={indice} >{libro}</li>
                })
            }
        </ul>)
        : (<p>No hay libros</p>)
        }
    </div>
  )
}

export default Header