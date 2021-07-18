import styled,{createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
`
export const Wrapper= styled.div`
 align-items:center;
 background:#00000080;
 bottom:0;
 display:flex;
 justify-content:center;
 opacity:1;
position:fixed;
 top:0;
 width:100%;
 media(max-width:760px){
  padding:4rem;
}
`
export const Close = styled(Link)`
position:absolute;
right:5%;
top:5%;
width:20px;
`