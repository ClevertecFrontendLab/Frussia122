import styled from "styled-components";

export const Button = styled.div`
   position: absolute;
   top: 50%;
   z-index: 2;
   right: -20px;
   cursor: pointer;
   background-color: white;
   width: 20px;
   display: flex;
   justify-content: center;
   height: 50px;

   &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 20px solid white; 
    border-bottom: 15px solid transparent; 
    bottom: -15px; 
}

&::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 15px solid transparent; 
    top: -15px;

}
`
