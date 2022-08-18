import React from "react";
import {
  InfoStyled,
  RowStyled,
  InfoDisplayStyled,
} from "../components/styled/Information.styled";
import { useNavigate } from "react-router-dom";
import { Info } from "../components/imp/informationInfo";
import { Outlet } from "react-router-dom";

const Information = () => {
  
  const navigate = useNavigate();

  return (
    <InfoStyled className="hello">
      <h1>Important Information</h1>
      <RowStyled className="rowstyled">
      {Info.map((info) => {
        return (
            <InfoDisplayStyled
              key={info.id}
              className="infoDisplay"
              onClick={() => {
                navigate(`/information/${info.id}`);
              }}
            >
              <h2>{info.title}</h2>{" "}
              <img src={`../images/${info.image}`} alt={info.title} />{" "}
            </InfoDisplayStyled>
        );
      })}
          </RowStyled>
      <Outlet />
    </InfoStyled>
  );
};

export default Information;

