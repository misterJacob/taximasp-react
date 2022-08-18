import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const NavigationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  color: white;

  .ofintrest {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h2 {
      text-decoration: none;
      color: white;
      font-size: 1.5rem;
    }
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    
    li {
      list-style: none;
    }
    a {
      border: 1px solid #fff;
      border-radius: 50%;
      color: #fff;
      
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      height: 45px;
      width: 45px;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: linear-gradient(
          to right,
          rgba(235, 251, 255, 0.3),
          rgba(0, 51, 51, 0.3)
        );
        opacity: 0.8;
      }
    }
    svg {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    .social{

      padding-top:1rem ;
    }
  }
`;

export const SNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  border: 1px solid white;
  &:hover {
    background: linear-gradient(
      to right,
      rgba(235, 251, 255, 0.3),
      rgba(0, 51, 51, 0.3)
    );
    opacity: 0.8;
  }
  &.active {
    color: red;
    background: linear-gradient(
      to right,
      rgba(235, 251, 255, 0.3),
      rgba(0, 51, 51, 0.3)
    );
  }
`;

