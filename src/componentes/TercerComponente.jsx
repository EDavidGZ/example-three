import React from 'react'
import PropTypes from 'prop-types'

const TercerComponente = ({nombre, apellidos, ficha}) => {

    let altura = ficha.altura

    const hasDadoClick = (e, nombre) => {
      alert('Has dado click' + nombre)
    }

    const hasDadoDobleClick = (e) => {
      alert('Has dado doble click')
    }

    const hasEntrado = (e, accion) => {
      console.log(`Has ${accion} a la caja con el mouse `)
    }


    const hasSalido = (e, accion) => {
      console.log(`Has ${accion} a la caja con el mouse `)
    }

    const estasDentro = () => {
      console.log("Estas dentro del input escribe tu nombre")
    }

    const estasFuera = () => {
      console.log("Estas fuera del input escribe tu nombre")
    }


  return (
    <div>
        <h1>Comunicacion</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{altura}</li>
        </ul>

        <h1>Events</h1>
        <button onClick={e => hasDadoClick(e,' Efren')}>nenas</button>
        <br /><br />
        <button onDoubleClick={hasDadoDobleClick}>mancas</button>

        <p id='caja' 
            onMouseEnter={ e => hasEntrado(e, "entrado")}
            onMouseLeave={ e => hasSalido(e, "salido")}>

          {/* Evento onmouse */}
            Pasa por encima

        </p>

        <p>
          <input type="text" 
                 onFocus={estasDentro} 
                 onBlur={estasFuera}
                 placeholder='Escribir nombre'/>
        </p>
    </div>
  )
}



export default TercerComponente

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}