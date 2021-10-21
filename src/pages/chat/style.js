import styled from "styled-components" ; 



export const Wrapper = styled.section`
   border:.5px solid #dbdbdb;
   display:flex;
   margin:2rem auto ;
   max-height:550px;
   height:100vh;
   max-width:1200px;
   width:100%;
   @media(max-width:760px){
      border-top:0;
      margin:0;
      position:relative;
      top:0%;
      width:100%;
   }
`
export const NoFollowerMessage = styled.p`
 font-weight:bold;
 left:50%;
 position:absolute;
 top:50%;
 transform:translate(-50%);
`