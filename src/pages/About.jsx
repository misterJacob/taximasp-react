import React from 'react'

import {
  AboutStyled,
  AboutCardStyled
} from "../components/styled/About.styled";

function About() {
  return (
    <AboutStyled className='about'>

     <AboutCardStyled>
       <h1>Taxi Licens XXXX</h1>
       <h2>Municipio San Bartolome De Tirajana</h2>
       <p>
         Plazas <b>9</b>
       </p>
       <p>
         Pasageros <b>8</b>
       </p>
       <p>Taxi adaptado discapacitado </p>
     </AboutCardStyled>
    </AboutStyled>
  );
}

export default About