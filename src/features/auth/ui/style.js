import styled from  "styled-components";
export const Form = styled.form`
 flex-direction:column;

`
export const Input = styled.input`
  border: ${props=>props.isError?"1.8px solid #bb0000 " : "1.8px solid #dbdbdb"};
  margin : ${props=>props.margin};
  padding: .8rem 0 .5rem 1rem;
  
  &:focus,&:valid{
      outline:.5px solid #dbdbdb;
  }
`
export const Label = styled.label`
display:flex;
flex-direction:column;
   margin : ${props=>props.margin};
   position:relative;
 `
export const Button = styled.button`
  background-color:#0095f6;
  border-radius:3px;
  color:white;
  cursor:pointer;
  font-weight:bold;
  margin : ${props=>props.margin};
  padding:.3rem 0;
  opacity:${props=>props.isValid?"1":".6"};
`
export const Span = styled.span`
 color: ${({isError})=>isError?"#bb0000":"grey"};
 position: absolute;
 pointer-event:none;
 font-size: 13px;
 bottom:30%;
 left: 5%;
 transition:transform .2s ease-in-out,bottom .2s ease-in-out;
`

export const errorCheckIcon = styled.div`
width:16px;
height:16px;
`
export const Show = styled.span`
 color:#385185;
 cursor:pointer;
 font-size:.9rem;
 font-weight:bold;
 transform:translate(85%,-160%)
`
export const Error = styled.span`
  color:#bb0000;
  font-size : ${({size})=>size==="meduim" ? "1.2rem" : ".8rem"};
  margin:0;
  ${({field})=>field==="password"?"padding : 1.5rem 0 0 0 ":null}
  transform:translateY(-.3rem);
  `
export const LoginClientErr = styled(Error)`
 padding : 0;
 transform :translateY(-.8rem)
`
export const ErrorMsg = styled.p`
  color:#bb0000;
 margin:0 0 .5rem 0;
  text-align:center;
`  