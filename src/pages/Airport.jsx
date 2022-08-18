import React from "react";
import { AirportStyled } from "../components/styled/Airport-styled";

const Airport = () => {
  return (
    <AirportStyled>
      <h1>Transfer</h1>

      <div>
        <img src="../images/airportGC.jpg" alt="" />
      </div>
      <h3>Lufthavns turer til og fra lufthavnen</h3>
      <p>
        San Augustin til lufthavnen <span>30 €</span>
      </p>
      <p>
        Playa del Ingles til lufthavnen <span>33 €</span>
      </p>
      <p>
        maspalomas (Campo Internaional) til lufthavnen <span>38 €</span>
      </p>
      <p>
        Meloneras til lufthavnen <span>40 €</span>
      </p>
      <p>
        <small>priserne gælder kun for forud bestilte turer.</small>
      </p>
    </AirportStyled>
  );
};

export default Airport;
