import styled from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper = styled.header`
 align-items:center;
 background:white;
 border-bottom:1.8px solid #dbdbdb;
 display:flex;
 padding:.5rem 10rem .5rem 10rem;
 @media(max-width:850px){
   justify-content:center;
   padding:.5rem 0;
 }
` 
export const NavBar = styled.nav`
  align-items:center ;
  display:flex;
  justify-content : space-between;
  position:relative;
   width:100%;
   @media(max-width:475px){
     align-items:stretch;
     flex-direction:column;
     padding:0 .5rem;
    &>div{
      margin-top:1rem;
    }
   }
`
export const Home = styled.div`
 
`
export const Explor = styled.div`
`
export const Chat = styled.div``
export const NavItems = styled.div`
align-items:center;
 display:flex;
 justify-content:space-between;
 &>div{
   margin-right:1rem;
 }
 @media(max-width:760px){
   margin-right:0rem;
 }.
`
export const SearchWrapper = styled.form`
 border:.5px solid grey;
 border-radius:3px;
 display:block;
 max-width:200px;
 opacity:.5;
 position :relative;
  width:30%;
  @media(max-width:475px){
    margin-top:.5rem;
    max-width:475px;
    width:100%;
   }
`
export const Search = styled.input`
background-color:transparent;
border:none;
${({isTextEmpty})=>!isTextEmpty?`padding:.2rem 0 .2rem 5rem;`:`padding:.2rem 0 .2rem 0rem;`}
width:100%;
&:focus{
  padding-left:2rem;
  outline:none;
}

&:focus::placeholder{
  text-align:left;

}
&:focus~i{
  background-color:white;
  left:6%;
}


@media(max-width:709px){
  padding:.2rem 0 .2rem 2rem;
}

@media(max-width:475px){
  &:focus~i{
    left:2%;
  }
}
`

export const SearchIcon = styled.i`
color:grey;
left:30%;
position:absolute;
top:15%;
@media(max-width:709px){
  left:2%;
}
`
export const Notification = styled.div``

export const Board = styled.div`
background:white;
box-shadow:1px 1px 5px 1px rgba(0,0,0,.2) ,-1px -1px 5px 1px rgba(0,0,0,.2);
position:absolute;
right:2%;
top:105%;
width:170px;
z-index:1;
&>*{
  cursor:pointer;
}
@media(max-width:800px){
  width:40%;
}
`
export const ToProfile = styled.span`
 color:black;
 margin:0 0 1rem .5rem ;
`
export const BoardItem =  styled.div`
 padding:1rem .5rem;

 &:focus,&:hover{
   background-color:#dbdbdb;
 }
`
export const Logout = styled.p`
margin:0;
`