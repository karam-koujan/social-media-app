import styled from "styled-components" ;
import {Flex} from "../../common/ui/commonStyle";

export const FriendsWrapper = styled.div`
 border-right : .5px solid #dbdbdb ;
 padding: .5rem 0 .5rem 0 ;
 width:30%;
 @media(max-width:760px){
  width:15%; 
}
`
export const Heading = styled.h2`
 margin:0 1rem 1rem 1rem;
 @media(max-width:760px){
  display:none;
}
`
export const FriendsList = styled.div`
 border-top :.5px solid #dbdbdb;
 max-height:490px;
 padding:1rem 0 1rem 0 ;
 overflow-y:scroll;
 scrollbar-style:none;
 scrollbar-width:none;
 &::-webkit-scrollbar{
  display:none;
}
 @media(max-width:760px){
  border-top:0; 
  padding:0 ;
}
 
`
export const UserName = styled.p`
 color:#262626;
 margin:0 .5rem;
 @media(max-width:760px){
   ${({removeInMobile})=>removeInMobile?`display:none;`:`display:block;`}
}
`
export const ChatBoardWrapper = styled.div`
  padding:.5rem 0;
  position:relative;
  width:100%;
`
export const MessageBoard = styled(Flex)`
 background-color:transparent;
 bottom:14%;
 flex-direction:column;
 max-height:75.5%;
 overflow-y : auto;
 padding:0 1rem ;
 position:absolute;
 scrollbar-style:none;
 scrollbar-width:none;
 width:100%;
 
 `
 /*
 &::-webkit-scrollbar{
  display:none;
 }

*/
export const Writing = styled.p`
 color:grey;
`
export const MessageInput = styled.textarea`
 background:transparent;
 border:none;
 overflow:hidden;
 padding :.8rem 0 0 1rem;
 resize:none;
 width:100%;
 &:focus{
     outline:none;
 }
 &::placeholder{
     font-size:16px;
 }
`
export const Send = styled.button`
 color:#0095F6;

 font-weight:bold;
 ${({isValid})=>!isValid ? `opacity:.7;`:`opacity:1;`}
`
export const MessagesWrapper = styled(Flex)`

 background-color:white;
 border-top:.5px solid #dbdbdb;
 bottom:0;
 margin:.5rem 0 0 0 ;
 padding:1rem .5rem 1rem 0;
 position:absolute;
 width:100%;
`
export const Friend = styled(Flex)`
  align-items :center;
  cursor:pointer;
  display:flex;  
  margin : .5rem 0rem 1rem 0rem ;
  
  padding:1rem .5rem;  
  ${({currentSelectedFriend})=>currentSelectedFriend?`background-color:#dbdbdb;`:`none;`}
  &:focus,&:hover{
    background-color:#dbdbdb;
  }
  @media(max-width:760px){
   justify-content:center;
 }
`
export const Emoticons = styled.div`
  bottom:12%;
  left:1%;
  position:absolute;
  z-index:1;
`
export const Message = styled.p`
 color:white;
 margin:0rem 0 ;
 overflow-wrap:break-word;
`
export const MessageWrapper = styled.div`
  ${({friendMessage})=>friendMessage?`
    align-self:flex-end;
    background-color:#4267B2;
    `:`
    align-self:flex-start;
    background-color:grey;
    color:white;
    `}
 border-radius:20px;
 margin: .5rem 0;
 padding : .5rem;
 max-width:200px;
`

export const SelectedFriend = styled(Flex)`
 border-bottom :.5px solid #dbdbdb;
`
export const FriendMessage = styled.div`
  background-color:grey;
  color:white;
  width:100%;
`
export const Form = styled.form`
 display:flex;
 justify-content:space-between;
 margin:0 0 0 .5rem;
 width:100%;
`