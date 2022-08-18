import styled from "styled-components";


export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;
  margin: 0;
  padding: 1rem 1.5rem;

  svg {
    font-size: 4rem;
    color: white;
    background: radial-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5));
    border-radius: 50%;
    padding: 0.5rem;
  }
  h1 {
    font-size: 2rem;
    color: white;
    font-family: "Lobster", cursive;
    letter-spacing: 3px;
    font-weight: 500;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
`;

export const NavStyled = styled.select`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  .flag-wrap {
    display: block;
    overflow: hidden;
    border-radius: 8px;
    width: 50px;
    height: 35px;
    cursor: pointer;
    background-color: black;
    margin-right: 1rem;

    img {
      width: 100%;
      height: 100%;
      transform: scale(1.3);
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.5);
        opacity: 0.85;
      }
    }
  }
`;
export const ButtonStyled = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem;
  width: 100%;
  margin-right: 10px;
  cursor: pointer;
  background-color: black;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease-in-out;
  .flag{
    margin-left:5px;
    font-size:1.5rem;
    border-radius:1000px;
  }
  &:hover {
    transform: scale(1.02);
    opacity: 0.85;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    padding: 10px;
  }
`;
export const ButonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    padding: 10px;
  }
`;
