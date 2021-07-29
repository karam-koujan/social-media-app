import {useForm } from "../../../../hooks/";
import {Flex,Icon} from "../../../common/ui/commonStyle";
import {CommentInput,CommentBtn,Emoticons} from "../style";
import emoji from "../../../../assets/icons/emoji.svg";
import Picker from "emoji-picker-react";
import { useAddComment } from "../../logic/hooks/useAddComment";
const AddComment = ({postId})=>{
    const {handleChange,handleShowEmoticon,text,showEmoticons,onEmojiClick,dispatch} = useForm();
    const {handleComment} = useAddComment(text,dispatch,postId);
    return(
    <Flex margin=".8rem 0 0 0" padding=".8rem .8rem 0 .8rem" alignItems="center" position="relative" borderTop="1px solid #dbdbdb">
      <Icon onClick={handleShowEmoticon} tabIndex="0">
        <img src={emoji} alt=""/>
      </Icon>
     <CommentInput 
       onChange={handleChange}
       value={text}
        type="text" 
        placeholder="Add a comment"
        width="90%"
        />
     <CommentBtn onClick={handleComment} isValid={text}>
         Post
     </CommentBtn>
     {
       showEmoticons?(
             <Emoticons >
               <Picker onEmojiClick={onEmojiClick}/>
             </Emoticons>
       ):null
     }
    </Flex> 
  )
}
export default AddComment ;