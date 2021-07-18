import styled from "styled-components";
import {Link} from "react-router-dom"
export const Wrapper = styled.div`
  background-color:white;
  border : 1.8px solid #dbdbdb;
  margin:2rem auto 0 auto;
  max-width:400px;
  
  padding : ${props=>props.padding};
  width:75%;
  
  & p{
    text-align:center;
  }
  @media(max-width:560px){
    margin:2rem 0 0 0;
    max-width:100%;
    width:100%;
  }
`
export const Icon = styled.div`
 cursor:pointer;
 position:relative;
 width:25px;
 margin:${({margin})=>margin};
`
export const Flex = styled.div`
  display:flex;
  ${
    ({borderTop,justifyContent,alignItems,flexDirection,flexWrap,width,margin,padding,position})=>`
     align-items :${alignItems};
    border-top:${borderTop};
    flex-direction:${flexDirection};
    flex-wrap:${flexWrap};
    justify-content:${justifyContent};
    margin:${margin};
    padding:${padding};
    position:${position};
    width:${width}
    `

  }
`
export const InstegramLogo = styled.div`
${
  ({margin,width,mobileMargin})=>`
      margin : ${margin};
      width:${width};
      @media(max-width:709px){
         margin:${mobileMargin}
      }
  `
}
@media(max-width:475px){
  margin:0 auto;
}
`
export const Or = styled.span`
   color:#8e8e8e;
   position:relative;
   left:48%;
   transform : translateX(-50%);
  &::before,&::after{
      background-color:#8e8e8e;
     content:"";
     height:1px;
     position:absolute;
     width:105px;
     top:50%;
  }
  &::before{
      left:-550%
  }
  &::after{
      right:-550%;
  }
`
export const LogInWithFbBtn = styled.button`
  background:${props=>props.background===null?"none":props.background};
  border-radius:3px;
  margin:2rem auto 1rem auto;
  padding:.5rem 2.2rem;
`
export const LogInWithFbTxt = styled.span`
  color:${props=>props.color};
  font-size:${props=>props.fontSize};
  font-weight:bold;
margin-left:.5rem;
  `
export const ForgotPass = styled(Link)`
  color:#00376b;
  font-size:.7rem;
  margin:1rem 0 0 6rem;
`
export const SignUp = styled(Link)`
 color:#0095F6;
 font-size:13px;
 font-weight:bold;
 margin-left:.5rem;
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
export const SpinnerWrapper = styled.div`
  color:grey;
  ${({size})=>`
 height:${size};
 width:${size};  
 `}
 
  left:50%;
  position:absolute;
  top:50%;
  margin:-20px 0 0 -20px;
  `
export const PostBtn = styled.button`
  background:none;
  color:#0095f6;
  cursor:pointer;
  font-weight:bold;
 ${({isValid,fontSize})=>`
 font-size:${fontSize};
 opacity: ${isValid ? 1 : .6 };
 `};
  &:focus{
    outline:none;
  }
`


export const PageWrapper = styled(Flex)` 
  background-color:#00000080;
  bottom :0;
  position:absolute;
  top:0;
  width:100%;
  z-index:1;
`