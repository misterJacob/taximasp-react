import React from "react";
import { useParams } from "react-router-dom";
import { Info } from "../../components/imp/informationInfo";

import {DisplayStyled } from "../../components/styled/Information.styled";

function InfoDisplay() {
  const { id } = useParams();
  return (
      <DisplayStyled className="displaystyled">
        <h2>{Info[id - 1].title}</h2>{" "}

        <img src={Info[id - 1].image2} alt={Info[id - 1].title} />{" "}

        <p>{Info[id - 1].textprimary} </p>
        <p>{Info[id - 1].textsecondary} </p>
      </DisplayStyled>
  );
}

export default InfoDisplay;
