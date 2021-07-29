import React from "react";
import {Wrapper,CommentSvg,WhiteHeart,StartVideo,PostVideo,Header, Avatar,UserName,PostImg,LikesNumber,SeeMore, DeletePostWrapper} from "../style";
import {Flex,PageWrapper} from "../../../common/ui/commonStyle";
import {Link} from "react-router-dom";
import {AddComment,Comment,Like,PostText} from "./";
import {usePostLogic,useLike,useVideo} from "../../logic/hooks/";
import play from "../../../../assets/icons/play.svg";
import whiteHeart from "../../../../assets/icons/whiteHeart.svg";
import DeletePost from "../../../deletePost/deletePost";

const Post = ({image,text,video,likes,comments,profileImg,userName,postId,postedById,userId})=>{

 const {seeMore,setSeeMore,showDeletePost,setShowDeletePost,showHeart,handleDoubleLike} = usePostLogic()
    const {isLiked,setIsLiked,handleLike} = useLike(likes,postId,userId);
    const { startVideo,handlePlayVideo,videoRef} = useVideo();
    return(
        <Wrapper>
          <Header>
              <Flex alignItems="center">
                  <Link to={`/profile/${userName}`}>
                <Avatar size="35px">
                           <img src={profileImg} alt=""/>         
                  </Avatar>
                  </Link>
                  <UserName  margin="0 .2rem 0 .8rem"to={`/profile/${userName}`} > 
                      {userName}
                  </UserName>
                  
              </Flex>
             
  <svg  tabIndex="1" aria-label="More options" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"  onClick={e=>setShowDeletePost(true)} tabIndex="0"><circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5"></circle></svg>
          </Header>
          {image?(
          <PostImg position="relative" onDoubleClick={()=>handleDoubleLike(handleLike)}>
              {showHeart?(

                  <WhiteHeart>
                      <img src={whiteHeart} alt="" />
                  </WhiteHeart>
              ):null
              }
              <img loading="lazy" src={image} alt="post image"/>
          </PostImg>
          ):(
          <PostVideo position="relative" onClick={handlePlayVideo}>
          <video width="100%" ref={videoRef}  >
              <source src={video} type="video/mp4"/>
          </video>
          {!startVideo?(
            <StartVideo  onClickCapture={handlePlayVideo}>
              <img src={play} alt="" />
          </StartVideo>):null}
          </PostVideo> 
          )
          }
          <Flex justifyContent="space-between" width="13%" margin=".8rem 0 0 1rem">
            <Like  isLiked={isLiked}  setIsLiked={setIsLiked} handleLike={handleLike}/>
          <Link to={`/post/${postId}`}>
          <CommentSvg aria-label="Comment" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></CommentSvg>     
          </Link>
          </Flex>
          <LikesNumber margin="1rem 0 0 1.5rem">
          {likes.length}  {likes.length>1?"likes":"like"} 
          </LikesNumber>
         <PostText text={text} seeMore={seeMore} userName={userName} setSeeMore={setSeeMore}/>
         {comments.length>2 ?<SeeMore margin="0 0 0 1.3rem" to={`/post/${postId}`} > see other {comments.length-2} comments</SeeMore>:null}

         {comments.length&&comments.length>=1?comments.slice(0,2).map(({text,commentedBy,_id})=>(
                   <Comment text={text} commentedBy={commentedBy} key={_id}/>
         )):null}
        <AddComment postId={postId}/>
            {showDeletePost?(
                <DeletePostWrapper justifyContent="center" alignItems="center">
                      <DeletePost setShow={setShowDeletePost}  postedById={postedById} userId={userId} postId={postId}/>       
                </DeletePostWrapper>
            ):null}
        </Wrapper> 
    ) 
    
}
export default Post;
