import React from 'react';
import PropType from 'prop-types'



const Clima = ({resultado}) => {
    //extraer los valores
    const {name, main } = resultado;

    if(!name) return null;

    //grados kelvin
    const Kelvin = 273.25;


 
return ( 
            <div className="card-panel white col s12">
                <div className="black-text">
                    <h2>El clima en {name} es :</h2>        
                    <p className="temperatura">La temperatura es:
                        {parseFloat(main.temp - Kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>
                    <p>Temperatura maxima:
                        {parseFloat(main.temp_max - Kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>
                    <p>Temperatura minima:
                        {parseFloat(main.temp_min - Kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                    </p>
                </div>
            </div>
 );
}
 
Clima.propTypes = {
    resultado: PropType.object.isRequired 
}


export default Clima;
