import styled from "styled-components";
import {Flex} from "../../../../common/ui/commonStyle";


export const Wrapper = styled.div`
flex-wrap:wrap;
max-width:700px;
width:100%;
max-width:700px;
 @media (max-width:760px){
   display:block;
 
 }
`
/* 
 
*/
export const ImgContainer = styled.div`

cursor:pointer;
height:${({height})=>height};
position:relative;
margin:1rem 1.5rem 0 0;
width:${({width})=>width};
&+&{
  margin-right:1.5rem;
  
} 
&>img,&>video{
  height:100%;
  object-fit:cover;
}


&:hover > div,&:focus>div{
  display:flex;
}
@media(max-width:760px){
  flex-grow:2;
  margin:1rem 0 1rem 0;
  width:100%;
   &+&{
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