import styled from "styled-components";

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem;
  background-color: rgba(233, 233, 233, 0.2);
  h1 {
    font-size: 2rem;
    color: white;
  }
  & > div {
    display: flex;
    align-items: center;
  }
`;
export const InfoDisplayStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.34);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  padding:0 0.5rem ;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.2);
  }
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    padding:10px ;
  }
`;
export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 1rem auto;
  border-radius: 1rem;
  padding: 1rem;
`;

export const DisplayStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem ;
  padding:2rem ;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.34);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.6);
  position:relative ;
  h2 {
    font-size: 1.6rem;
    font-weight: 900;
    color: black;
    letter-spacing: 2px;
  }
  P {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: black;
    letter-spacing: 1px;
  }
  img {
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:0 ;
    max-width: 80%;
    height: 90%;
    border-radius: 50%;
    padding: 10px;
    opacity:0.5 ;
  }
  h2,
  p {
    z-index:1 ;
  }
`;
