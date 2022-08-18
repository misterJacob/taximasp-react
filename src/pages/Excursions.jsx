import React from 'react'
import { AirportStyled } from "../components/styled/Airport-styled";


const Excursions = () => {
  return (
    <AirportStyled>
      <h1>Excursions</h1>
      <div>
        <img src="../images/excursions-display.png" alt="Excursions" />
      </div>
      <h3>Planlæg din udflugt som det passer dig.</h3>
      <p>
        Pris pr Time er mellem <span>25€ og 28€</span>
      </p>
      <p>bekræft med chauføren</p>
    </AirportStyled>
  );
}

export default Excursions