import styled from "styled-components";
import {Flex} from "../common/ui/commonStyle";


export const Wrapper = styled(Flex)`

flex-wrap:wrap;
 max-width:800px;
 width:95%;
 @media (max-width:460px){
   display:block;

 }
`
export const ImgContainer = styled.div`
align-items:center;
background-image:${({backgroundImg})=>`url("${backgroundImg}")`};
background-repeat:no-repeat;
background-position:center;
background-size:cover;
cursor:pointer;
display:flex;
justify-content:center;
height:150px;
margin:1rem 0 0 .5rem;
position:relative;
width:30%;
&+&{
  margin-left:.5rem;
}
&:hover > div,&:focus>div{
  display:flex;
}
@media (max-width:460px){
  display:block;
  width:80%;
  margin:1rem auto;
  &+&{
    margin:1rem auto;
  }
}
@media (max-width:360px){
  display:block;
  width:100%;
  margin:1rem auto;
  
}
`
export const NoPost = styled.p`
 color:black;
 font-weight:bold;
`
export const Icon = styled.div`
 margin:0 0 0 .4rem;
 width:25px;
 
`
export const IconsContainer = styled(Flex)`
background-color:#00000080;
bottom:0;
display:none; 
left:0;
justify-content:center;
position:absolute;
right:0;
 top:0;
 transform :translate(-50%):
 width:100%;
`
export const Num = styled.span`
 color:white;
 font-weight:bold;
 margin:0 0 0 .5rem;
`