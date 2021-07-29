import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/";
import { useCreatePost } from "../logic/useCreatePost";
import {Flex,Avatar,PostBtn} from "../../common/ui/commonStyle";
import {TextArea,Icon,InputFile,Emoticons,Wrapper,Media,SelectedFile,Close} from "./style";
import Picker from "emoji-picker-react";
import gallary from "../../../assets/icons/gallary.svg";
import videoIcon from "../../../assets/icons/video.svg";
import emoji from "../../../assets/icons/emoji.svg";
const NewPost = ({userData : {userName,profileImg}})=>{
  const {
    dispatch,  
    image,
    video,
    text,
    showEmoticons,
    handleChange,
    handleHideMedia,
    handleUploadImg,
    handleUploadVideo,
    handleShowEmoticon,
    onEmojiClick} = useForm() ;
    const {handlePost} = useCreatePost({text,image,video,postDate:Date.now()},dispatch);
 
    return(
            <Wrapper >
              <Flex >
                   <Link to={`/profile/${userName}`}>
                   <Avatar size="40px" >
                       <img src={profileImg} alt="avatar"/>
                   </Avatar>
                   </Link>
                 <TextArea resize={false} placeholder={`what's in your mind ${userName}`} onChange={handleChange} value={text}/>
                 <Icon margin=".5rem .7rem 0 2rem" onClick={handleShowEmoticon} tabIndex="0">
                   <img src={emoji} alt=""/>
                 </Icon>
                 {showEmoticons?
                (
                <Emoticons >
                    <Picker onEmojiClick={onEmojiClick}/>
                </Emoticons>
                )
                :null}
              </Flex>
                 <Media>
                
                    {
                     image||video ?( 
                     <Close onClick={handleHideMedia}>
                      <span>&#10006;</span>
                    </Close>):null
                     }
                  
                     {
                         image?(
                             <SelectedFile>
                                 <img src={image} alt="uploaded image"/> 
                             </SelectedFile>
                         ): video ? (
                             <SelectedFile>
                             <video width="100%">
                                 <source src={video} controls/>
                             </video>
                             </SelectedFile>
                         ) : null
                         }
                 </Media>
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex justifyContent="space-between" >
                        <Icon tabIndex="0">
                            <InputFile type="file" onChange={handleUploadImg}/>
                      <img src={gallary} alt=""/>
                        </Icon>
                       <Icon margin="0 0 0 2rem" tabIndex="0">
                       <InputFile type="file" onChange={handleUploadVideo}/>
                           <img src={videoIcon} alt=""/>
                       </Icon>
                    </Flex>
                    <PostBtn isValid={text&&(image||video)} fontSize=".9rem" onClick={handlePost}  >
                        Post
                        </PostBtn>
                </Flex>
                
            </Wrapper>
        
    )
}
export default NewPost ;