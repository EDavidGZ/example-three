import React, { useEffect, useState } from 'react'
import { Aviso } from './Aviso';

const PruebaEfect = () => {

    const [usuario, setUsuario] = useState('Efren')

    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value)
    }

    useEffect(() => {
        console.log('Has cargado el usuiario')
    }, [])

    useEffect(() => {
        setContador(contador + 1)
        console.log('Has cambiado el usuiario ' + contador)


    }, [usuario])


  return (
    <div className={contador > 10 ? 'label' : 'label2'}>
        <h1>El efecto</h1>
        <strong>{usuario}</strong>
        <br />
        <input 
            type="text"
            onChange={ modUsuario}
            placeholder="Cambiar nombre" />

        
        { usuario == 'Efren' && <Aviso />}


    </div>
  )
}

export default PruebaEfect