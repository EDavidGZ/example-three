import React, {useState} from 'react'
import PropTypes  from 'prop-types';

const Ejercicio = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const siguiente = e => setYearNow(yearNow + 1);
    const atras = e => setYearNow(yearNow - 1);

    const cambiarYear = e => {
        let dato = e.target.value;

        if(Number(dato)) {
            setYearNow(dato);
        } else {
            setYearNow(year)
        }

    }


  return (
    <div>
        <h2>Ejercicio de Eventos</h2>
        <strong>
            {yearNow}
        </strong>
        <p>
            <button onClick={siguiente}>Ir al siguiente</button>
            <br />
            <button onClick={atras}>Atras</button>
        </p>

        <p>
            <span>Cambiar año</span>
            <input 
                    type="text"
                    onChange={cambiarYear}
                    placeholder='Cambiar año' />

        </p>
    </div>
  )
}

export default Ejercicio

Ejercicio.propTypes = {
    year: PropTypes.number.isRequired
}