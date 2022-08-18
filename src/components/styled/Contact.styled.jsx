import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:4rem ;
    color: white;
    background:${({ theme }) => theme.colors.backGroundCard};
    box-shadow: ${({ theme }) => theme.colors.BoxShaodow};
    border-radius:25px;
    margin:5rem auto ;

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    P{
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        
    }




    `;