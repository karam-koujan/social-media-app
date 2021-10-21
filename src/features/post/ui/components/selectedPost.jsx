import {Link} from "react-router-dom";
import {usePostLogic,useLike,useVideo} from "../../logic/hooks";
import {MobilePostImg,MobilePostVideo,WhiteHeart,SelectedPostVideo,DeletePostWrapper,CommentEmoticonWrapper,SelectedPostImg,SelectedPostWrapper,Header,UserName,Avatar,LikesNumber,CommentsSection,Comments, PostImgWrapper} from "../style";
import  {Flex} from "../../../common/ui/commonStyle";
import {AddComment,Comment,Like,PostText} from "./";
import DeletePost from "../../../deletePost/deletePost";
import whiteHeart from "../../../../assets/icons/whiteHeart.svg";


const SelectedPost = ({image,text,video,profileImg,userName,postId,likes,comments,postedById,userId})=>{
  const {seeMore,setSeeMore,showDeletePost,setShowDeletePost,handleDoubleLike,showHeart} = usePostLogic();
  const {isLiked,handleLike,setIsLiked} = useLike(likes,postId,userId);
  const {handlePlayVideo,videoRef} = useVideo();
  return(
      <SelectedPostWrapper>
         
         {image?(
        <SelectedPostImg  onDoubleClick={()=>handleDoubleLike(handleLike)}>
         {showHeart?(
           <WhiteHeart >
              <img src={whiteHeart} alt="" />
          </WhiteHeart>
         ):null}
         <img src={image} alt="post image" />
        </SelectedPostImg>
         ):(
            <SelectedPostVideo position="relative" onClick={handlePlayVideo}>
            <video width="100%" height="100%" ref={videoRef}  controls>
                 <source src={video} type="video/mp4"/>
            </video>

            </SelectedPostVideo>
         )

         }
         
       <CommentsSection>
      <Header>
              <Flex alignItems="center">
              <Link to={`/profile/${userName}`} aria-label={`go to ${userName} profile`} >
                  <Avatar size="35px">
                           <img src={profileImg} alt=""/>         
                  </Avatar>
                  </Link>
                  <UserName  margin="0 .8rem 0 .8rem" to={`/${userName}`}>
                      {userName}
                  </UserName>
              </Flex>
              <svg aria-label="More options" className="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16" onClick={_=>setShowDeletePost(!showDeletePost)} tabIndex="0"><circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5"></circle></svg>
          </Header>
          {image?(
          <MobilePostImg>
            <img src={image} alt="" />
          </MobilePostImg>
          ):(
            <MobilePostVideo position="relative" onClick={handlePlayVideo}>
            <video width="100%" height="100%" ref={videoRef}  controls>
                 <source src={video} type="video/mp4"/>
            </video>
        
            </MobilePostVideo>
         )
          }
       <PostText text={text} seeMore={seeMore} userName={userName} setSeeMore={setSeeMore}/>
    
        <Comments>
 
         {comments.length?comments.map(({text,commentedBy,_id})=>(
                   <Comment text={text} commentedBy={commentedBy} key={_id}/>
         )):null}
        </Comments>
        <CommentEmoticonWrapper justifyContent="space-between" padding="2rem 0 0 0"  margin=".8rem 0 .5rem 0rem" flexDirection="column" >
            <Flex alignItems="center" margin="1rem 0 0 .9rem">
            <Like  isLiked={isLiked}  setIsLiked={setIsLiked} handleLike={handleLike} />
            <LikesNumber margin="0">
           {likes.length}    {likes.length>1?"likes":"like"} 
          </LikesNumber> 
            </Flex>
             
        <AddComment postId={postId}/>
          </CommentEmoticonWrapper>
       </CommentsSection>
       {showDeletePost?(
                <DeletePostWrapper justifyContent="center" alignItems="center">
                      <DeletePost setShow={setShowDeletePost}  postedById={postedById} userId={userId} postId={postId}/>       
                </DeletePostWrapper>
            ):null}
      </SelectedPostWrapper>
  )
}
export default SelectedPost ;

