import styled from "styled-components";

export const AirportStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  background: ${({ theme }) => theme.colors.backGround};
  border-radius: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Lobster", cursive;
    margin-bottom: 1rem;
    color: #fff;
    letter-spacing: 2px;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 300;
    color:white;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: "Lobster", cursive;
    margin-bottom: 1rem;
    color: #fff;
    letter-spacing: 2px;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Lobster", cursive;
    margin-bottom: 1rem;
    color: #fff;
    letter-spacing: 2px;
    margin-bottom: 1.2rem;
  }
  p > small {
    font-size: 1.1rem;
    color: black;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 15rem;
    overflow: hidden;
    margin-bottom: 1rem;
    border-radius: 1rem;
    background-color:white ;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  img {
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
`;
