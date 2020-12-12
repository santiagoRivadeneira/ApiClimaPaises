import React, {Fragment} from 'react';
import PropType from 'prop-types'



const Header = ({titulo}) => {
    
    return(
    
    <Fragment>
            <nav>
                 <div className="nav-wrapper light-blue darken-2">
                     <a href="#!" className="brand-logo">{titulo}</a>
                 </div>
            </nav>
    </Fragment>
    )
}


Header.propType = {
    titulo: PropType.string.isRequired,
    
}
  



export default Header;