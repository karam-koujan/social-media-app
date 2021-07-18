import styled from "styled-components";




export const Board = styled.div`
 background-color:white;
 box-shadow:0px 1px 10px .5px rgba(0,0,0,0.2);
 padding:1rem .5rem;
 position:absolute;
 right:5%;
 top:6%;
 width:35%;

 &::before{
     width: 0; 
     height: 0; 
     border-left: 9px solid transparent;
     border-right: 9px solid transparent;
     border-bottom: 12px solid white;     
     content:"";
     left:62.5%;
     position:absolute;
     top:-19%;
 }
`