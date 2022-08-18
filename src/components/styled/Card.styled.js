import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  font-family: "Smooch", cursive;
  max-width: 1000px;
  flex-direction: ${({ layout }) => layout || "row"};
  margin: 20px auto;
  background-color: rgba(245, 245, 245, 0.516);
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.55);
  padding: 40px;
  color : red;

  img {
    width: 80%;
    max-width: 250px;
    border-radius: 15px;
    opacity: 0.9;
    margin:0 1.5rem;
  }

  & > div {
    flex: 1;
  }
  h2{
    font-size: 2.0rem;
    font-weight: bold;
    margin-bottom: 10px;
    line-height:2.2rem ;
    letter-spacing:3px ;
  }
  p {
    margin: 0;
    font-size:1.5rem ;
    font-weight: 600;
    line-height: 1.8;
    letter-spacing:2px ;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const SLink = styled(Link)`

  text-decoration: none;
`;