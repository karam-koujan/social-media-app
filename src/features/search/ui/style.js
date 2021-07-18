import styled from "styled-components";

export const Wrapper = styled.div`
  background:white;
  border-radius:6px;
  box-shadow:.5px .5px 1px 1px rgba(0,0,0,.2) , .5px .5px 1px 1px rgba(0,0,0,.2);
  height:200px;
  left:50%;
  overflow:auto;
  padding:1rem;
  position:absolute;
  top:125%;
  transform :translateX(-50%);
  width:40%;
  z-index:1;
  @media(max-width:475px){
  right:00%;
  top:60%;
  width:80%;
   }
 
`
export const UserName = styled.p`
 color:black;
 margin :.3rem 0 0 .5rem;
`
export const NoResultWrapper = styled.div`
   height:100%;
   position:relative;
`

export const NoResult = styled.p`
 color:grey;
 left:46%;
 margin:0;
 position:absolute;
 top:45%;
 transform:translate(-50%);
`