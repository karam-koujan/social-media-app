import styled from "styled-components";

export const Wrapper = styled.section`
background-color:white;
border : 1.8px solid #dbdbdb;
margin:2rem auto 0 10rem;
max-width:600px;
padding:.8rem;
position:relative;
@media(max-width:760px){
    width:100%;
    margin:2rem 0;
} 
`
export const TextArea = styled.textarea`
 border:none;
 height:5rem;
 margin :.5rem 0 0 0;
 padding:0  .5rem;
 resize:none;
 width :80% ;

 &:focus{
     outline :none;
 }
`
export const Icon = styled.div`
 cursor:pointer;
 position:relative;
 width:25px;
 margin:${({margin})=>margin};
`
export const InputFile = styled.input`
cursor:pointer;
font-size:0;
height:25px;
opacity:0;
position:absolute;
width:25px;
`
export const Emoticons = styled.div`
 position:absolute;
 right:5%;
 top:33%;
 z-index:1;
`
export const Media = styled.div`
 border-radius:6px;
 margin :0 0 .5rem 0;
 position:relative; 
 &>img{
    border-radius:6px;

 }
`
export const SelectedFile=styled.div`
 width:80%;
`
export const Close = styled.button`
 background-color:grey;
 border-radius:50%;
 color:white;
 font-size:1.2rem;
 left:3%;
 position:absolute;
 top:3%;
 z-index:1;
`
