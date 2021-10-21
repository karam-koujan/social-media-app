import {Txt,UserName,Avatar} from "../style";
import {Flex} from "../../../common/ui/commonStyle";
const Comment = ({text,commentedBy,isImgExist})=>{
        if(isImgExist){

          return(
        
                <Flex margin=".3rem 0 1rem 1.3rem" alignItems="center" >
                        <Avatar size="35px">
                          <img src={commentedBy.profileImg}/>
                        </Avatar>   
                   <Txt margin="0 0 .5rem 1.3rem">
                       <UserName fontWeight="bold" margin="0 .2rem 0 0" to={`/profile/${commentedBy.userName}`}>{commentedBy.userName}</UserName>
                        {text}
                   </Txt>
                   </Flex>
                )
        }else{

        return(
               <Txt margin="0 0 .5rem 1.3rem">
                    <UserName fontWeight="bold" margin="0 .2rem 0 0" to={`/profile/${commentedBy.userName}`}>{commentedBy.userName}</UserName>
                        {text}
                   </Txt>
                
        )
        }
}
export default Comment;