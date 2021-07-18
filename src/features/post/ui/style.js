import styled  from "styled-components";
import {Link} from "react-router-dom";
import { PageWrapper,Flex } from "../../common/ui/commonStyle";
import {animated} from "react-spring";
export const LikeWrapper = styled.button` 
`
export const Wrapper = styled.section`
border:.5px solid #dfdfdf;
margin:3rem 0 1rem 10rem;
padding:0 0 .9rem 0;

max-width:600px; 
@media(max-width:760px){
  border-bottom:.5px solid #dfdfdf;
  border-top:.5px solid #dfdfdf;
  margin:3rem 0; 
  width:100%;
 }
`
export const LikeSvg =  styled.svg`
`
export const SelectedPostImg = styled.div`
 overflow:hidden;
 position:relative;
 display:inline-block;
 height:100%;
 width:60%;
 & >img{
   object-fit:cover;
 }
 @media(max-width:760px){
  display:none;
}

`
export const SelectedPostWrapper = styled(Wrapper)`
  background-color:white;
  display:flex;
  justify-content:space-between;
  margin:2rem auto;
  max-width:800px;
  padding:0; 
  @media(max-width:760px){
    flex-direction:column;
    height:auto;
    margin:2rem auto;
    max-height:none;
}
  `
   export const PostImg = styled.div`
  background-image:${({backgroundImg})=>`url("${backgroundImg}")`};
   width:${({width})=>width};
  position : ${({position})=>position};
  background-repeat:no-repeat;
  background-size: fill;
  top:0;
  bottom:0;
 
`

export const WhiteHeart = styled(animated.div)`
  height:70px;
  left:50%; 
  margin-left:-35px;
  margin-top:-35px;
  position:absolute;
  top:50%;
  width:70px;
  animation-name:whiteHeart;
  animation-duration:1s;
  @keyframes whiteHeart{
    0%{
      transform : scale(0)
    }
    25%{
      transform:scale(1)
    }
    50%{
      transform :scale(.8)

    }
    75%{
      transform:scale(1)
    }
     100% {
       transform :scale(0)
     }
  }

`
export const PostVideo = styled(PostImg)`
  
`
export const SelectedPostVideo = styled(SelectedPostImg)`
 position:relative;
 & > video{
   object-fit:cover;
 }

`
export const StartVideo = styled.div`
 cursor:pointer;
  left:50%;
  position:absolute;
  right:50%;
  top:40%;
  transform:translate(-50%);
  width:50px;
  height:50px;
  z-index:1;
`
/*
export const SelectedPostImg = styled(PostImg)`
  @media (max-width:760px){
  display:none;
}
`
*/
export const CommentSvg = styled.svg`

`
export const MobilePostImg = styled.div`
   display:none;
   margin:1rem 0;
  @media(max-width:760px){
   display:block;
   width:100%;
  }
   `
   export const MobilePostVideo = styled(MobilePostImg)``
export const  AddCommentWrapper = styled.div`
display:flex;
align-items:center;
 border-top:1px solid #dbdbdb;
 margin:.8rem 0 0 0;
 padding:.8rem .8rem 0 .8rem;
 `
export const  CommentsSection = styled.div`
 display:block;
 flex-direction:column;
 justify-content:space-between; 
 overflow:scroll;
 position:relative;
 scrollbar-style:none;
 scrollbar-width:none;
 width:40%;
 &::-webkit-scrollbar{
  display:none;
}
  @media(max-width:760px){
    display:flex;
    width:100%;
  }
` 
export const Comments = styled.div`
height:30%;
margin:.5rem 0 0 0;
overflow : scroll;
scrollbar-style:none;
scrollbar-width:none;
&::-webkit-scrollbar{
  display:none;
}
z-index:1;
@media(max-width:760px){
   max-height:200px;
}
`
export const Header = styled.header`
 align-items:center;
 display:flex;
 justify-content:space-between;
 padding:.7rem; 
 `

export const Avatar = styled.div`
 border-radius:50%;
 ${({size})=>`
 height:${size};
 width:${size};  
&>img{
    border-radius:50%;
    height:${size};
    object-fit:cover;
      width:${size};  
  }
 `}

`
export const UserName = styled(Link)`
color:#262626;
 font-size : .8rem;
 ${({fontWeight,margin})=>
 `font-weight : ${fontWeight} ;
  margin :${margin};
 `}
 &:hover,&:focus{
   text-decoration:underline;
 }
  
`



export const LikesNumber= styled.span`
  color:#262626;
  font-size:.8rem;
  font-weight:bold;
  margin:${({margin})=>margin}; 
`
export const Txt = styled.p`
  margin :${({margin})=>margin};
`
  

export const CommentInput = styled.input`
background:none;
 border:none;
 margin:0 0 0 1rem; 
 ${({width})=>`
    width:${width};
 `}
 &:focus{
   outline:none;
 }
`
export const CommentEmoticonWrapper = styled(Flex)`
 bottom:0;
 position:absolute;
 width:100%;
 z-index:1;
 @media(max-width:760px){
   position:relative;
 }
`
export const CommentBtn = styled.button`
  color:#0095f6;
  font-weight:bold;
  opacity:${({isValid})=>isValid?1:.6};
`
export const SeeMore = styled(Link)`
 color:grey;
 cursor:pointer;
 margin:${({margin})=>margin};
 &:hover,&:focus{
   text-decoration : underline;
 }
`
export const Emoticons = styled.div`
  position:absolute;
  left:0%;
  bottom:110%;

`
export const DeletePostWrapper  = styled(PageWrapper)`
     left:0rem;
     position:fixed;
     right :0;
`