import React from "react";
import { useParams } from "react-router-dom";
import { Content } from "../components/assets/textinfo";

function ShowContent() {
  const { id } = useParams();

  return (
    <div className="section-container">
      <div>
        <h2>{Content[id - 1].title}</h2>
        <img
          src={`./images/${Content[id - 1].image}`}
          alt=""
          className="image"
        />
        <h3>{Content[id - 1].description} </h3>
        <p>
          {Content[id - 1].prices}
          <bold>€</bold>
        </p>
        <p>{Content[id - 1].text}</p>
      </div>
    </div>
  );
}

export default ShowContent;
