import React, { useState} from 'react'

const Estado = () => {

    //Problematica 
    // let nombre = 'Efren';

    // const cambiarNombre = () => {
    //     nombre = 'David'

    const [ nombre, setNombre] = useState('Efren');

    const cambiarNombre = (e, nombreFijo) => {
       
        setNombre(nombreFijo);
    }



    

  return (
    <div>
        <h3>Mi primer Estado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e, 'David')}>Cambiar mi nombre</button>
        <br />
        <input type="text" onKeyDown={e => cambiarNombre(e, e.target.value)} placeholder='Escribe Nombre' />
    </div>
  )
}

export default Estado