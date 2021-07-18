import React,{useRef,useEffect} from "react";
import {useIdk} from "../../../hooks/";
import {ChatBoardWrapper, Form,UserName,MessageBoard, MessageInput,Send,MessageWrapper,MessagesWrapper,Emoticons,Message,SelectedFriend,FriendMessage,Writing} from "./style";
import {Flex,Avatar,Icon} from "../../common/ui/commonStyle";
import emoji from "../../../assets/icons/emoji.svg" 
import Picker from "emoji-picker-react";
import { useChatBoard } from "../logic/useChatBoard";
import {useFriendContext} from "../../../pages/chat/friend-context";

 
const ChatBoard = ({userId})=>{
  
  const {selectedFriend} = useFriendContext()
  const {handleChange,text,onEmojiClick,showEmoticons,dispatch,handleShowEmoticon} = useIdk();
  const {messages,handleSendMessage,handleStartWriting,handleStopWriting,startWriting} = useChatBoard(text,userId,dispatch)
  const messageBoardRef = useRef(); 
  useEffect(()=>{
    messageBoardRef.current.scrollTop = messageBoardRef.current.scrollHeight;
  })

    return(
      <ChatBoardWrapper>

          <SelectedFriend alignItems="center" margin="0 0 0 0" padding="0 0 .5rem .5rem">
              <Avatar size="40px">
                  <img src={selectedFriend.profileImg} alt="" />
              </Avatar>
                  <UserName removeInMobile={false}>
                    {selectedFriend.userName}
                  </UserName>
        </SelectedFriend>
        
                
        <MessageBoard ref={messageBoardRef}>
             { messages.map(({message,id},idx)=>
                   (
                  <React.Fragment key={idx}>
                 <MessageWrapper  friendMessage ={id===userId}>
                     <Message>{message}</Message>
                 </MessageWrapper>   
                   </React.Fragment>
             ))}
             {startWriting?<Writing>{startWriting}</Writing>:""}
        </MessageBoard >
        { showEmoticons?(
             <Emoticons >
               <Picker onEmojiClick={onEmojiClick}/>
             </Emoticons>
       ):null
        }
        <MessagesWrapper width="100%"   margin=".5rem 0 0 0 " > 
             <Form action="" onSubmit={handleSendMessage} >
             <Flex alignItems="center" width="100%">

                 <Icon tabIndex="0" onClick={handleShowEmoticon} >
                     <img src={emoji} alt="emoticons"/>
                 </Icon>
             <MessageInput type="text" placeholder="write a message" onChange={handleChange} onKeyPress={handleStartWriting} onMouseLeave={handleStopWriting}  value={text}>
              </MessageInput>
             </Flex>
                 <Send isValid={text}  disabled={text?false:true}>
                     Send
                 </Send>
             </Form>
        </MessagesWrapper>
      </ChatBoardWrapper>
  )
}
export default ChatBoard ;