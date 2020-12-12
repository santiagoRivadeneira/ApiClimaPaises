import React from 'react';
import PropType from 'prop-types'

const Error = ({mensaje}) => { 
    return(
    <p className="red darken-4 error">{mensaje}</p>
    
    )
}

Error.propTypes = {
    mensaje: PropType.string.isRequired 
}



export default Error ;