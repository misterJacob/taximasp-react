import styled from 'styled-components';

export const NavStyled = styled.nav`

  display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 0.5rem 1rem;


  .flag-wrap{
    display: block;
    overflow: hidden;
    border-radius:8px ;
    width: 50px;
    height: 35px;
    cursor: pointer;
    background-color:black;
    margin-right: 1rem;
    
    img{
      width: 100%;
      height: 100%;
      transform: scale(1.3);
      transition: all 0.3s ease-in-out;
      &:hover{
        transform: scale(1.5);
        opacity:0.85 ;
      }

    }
  }
  
  
  
  `;

