import styled from "styled-components";


export const Wrapper = styled.div`
border:.5px solid #dfdfdf;
margin:3rem 0 0 10rem;
padding:${({padding})=>padding};

max-width:600px; 
@media(max-width:760px){
  width:100%;
     border:none;
     margin:3rem 0; 
 }
`
export const Circle = styled.div`

background-color:#dbdbdb;
border-radius:50%;
height:${({height})=>height};
margin:0 .5rem 0 0;
width :${({width})=>width};
`
export const Rectangle = styled.div`
  animation-duration:5s;
  animation-iteration-count:infinite;
  animation-name:loading;
  animation-time-function:ease-in-out;
  background : #dbdbdb;

  height:${({height})=>height};
  position:relative;
  width :${({width})=>width};

 
   
  

  }
  `
/*
&::before{
    background-color:white;  
    bottom :0%;
    content:" ";
    height:100%;
    position:absolute;
    top:0%;
    width:1%;
*/