import {ImgContainer,Wrapper,NoPost,Icon,IconsContainer,Num} from "./style"
import {Flex} from "../../../../common/ui/commonStyle";
import {Link} from "react-router-dom";
import whiteHeart from "../../../../../assets/icons/whiteHeart.svg";
import commentIcon from "../../../../../assets/icons/speech-bubble.svg";

const ImageOnlyPost = ({image,_id,likes,comments,video,width,height})=>{
    return(
         
              <ImgContainer width={width}  height={height}>            
                   {image?<img src={image} alt="post image"/>:(
                       <video>
                           <source src={video}/>
                       </video>
                    )}
                  <IconsContainer>
                      <Flex alignItems="center">
                    <Link to={`/post/${_id}`}>
                     <Icon>
                         <img src={whiteHeart} alt="like"/>
                     </Icon>
                    
                    </Link>      
                         <Num>
                           {likes.length}
                         </Num>

                      </Flex>
                      <Flex alignItems="center" >
                      <Link  to={`/post/${_id}`}>
                     <Icon>
                         <img src={commentIcon} alt="comment"/>
                     </Icon>
                      
                      </Link>    
                         <Num>
                             {comments.length}
                         </Num>

                      </Flex>
                  </IconsContainer>
                 
                </ImgContainer>
           
    )
}
export default ImageOnlyPost ;