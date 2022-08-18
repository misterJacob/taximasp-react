import React from 'react'
import Flag from "react-world-flags";
import { NavStyled } from './styled/Nav.styled';



function NavLanguage() {
  return (
      <NavStyled>

        <div className='flag-wrap'>
            <Flag code="dk" />
        </div>
        <div className='flag-wrap'>
            <Flag code="gb" />
        </div>
        <div className='flag-wrap'>
            <Flag code="es" />
        </div>
        <div className='flag-wrap'>
            <Flag code="de" />
        </div>
      </NavStyled>
  );
}


export default NavLanguage
