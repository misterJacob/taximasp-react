import styled from "styled-components";

export const AboutStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:5rem auto ;
  box-shadow: ${({ theme }) => theme.colors.BoxShaodow};
  background: ${({ theme }) => theme.colors.backGroundCard};
border-radius:15px;
`;

export const AboutCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:4rem ;
  color: white;

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        font-weight:500 ;
    }
`;
