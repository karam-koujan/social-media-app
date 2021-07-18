import styled from "styled-components" ;
import {Flex} from "../common/ui/commonStyle";

export const Wrapper = styled.div`
   background-color:white;
   border-radius:6px;
   max-width:300px;
   width:80%;
`
export  const List = styled.ul`
 align-items:center;
 display:flex;
 flex-direction:column;
 justify-content:center;
 margin:0;
 padding:0;
 width:100%;

 
`
export const ListItem = styled.li`
  border-bottom : .7px solid #dfdfdf;  
  padding:.8rem 0 ;
  text-align:center;
  width:100%;
  &>button{
    font-size:14px;
    font-weight:bold;
  }
  &:last-child{
    border:none;
}
`
export const DeletePostBtn = styled.button`
 color:red;
 ${({isAllowed})=>!isAllowed?`opacity:.5`:`opacity:1`}

`