import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// import { Content } from './assets/textinfo'
import { StyledCard, SLink } from "./styled/Card.styled";
// import { useTranslation } from "react-i18next";


 const Card = ({
  
   
   item: { id, path, title, textprimary, textsecondary, image },
  }) => {
    // const { t } = useTranslation();
    return (
      <SLink to={path} className="link" >
       <StyledCard layout={id % 2 === 0 && "row-reverse"} className="card">
         <div>
           <h2>{title}</h2>
           <p>{textprimary}</p>
           <p>{textsecondary}</p>
         </div>
         <div>
           <img src={`./images/${image}`} alt="" className="image" />
         </div>
       </StyledCard>
     </SLink>
   );
 };

 export default Card;






