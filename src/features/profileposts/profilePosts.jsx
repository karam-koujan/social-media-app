import { useFetchQuery } from "../../hooks/";
import {Wrapper,NoPost} from "./style";
import Spinner from "../common/ui/spinner";
import ImageOnlyPost from "../post/ui/components/imageOnlyPost";
const ProfilePosts = ({_id})=>{
   const {isLoading,data} = useFetchQuery(["profilePosts",_id],`https://instegram-clone.netlify.app//api/profile/${_id}/posts`)
    return(
        <Wrapper margin="2rem auto 0 auto" width="60%">
          {!isLoading?
          data.posts.length>0?data.posts.map(({video,image,_id,likes,comments})=>(
            <ImageOnlyPost video={video}  comments={comments} key={_id} _id={_id} likes={likes} image={image} width="30%" height="200px"/>
          
            )
            ):<NoPost>There is No Post</NoPost>:<Spinner size="50px"/>} 
        </Wrapper>
    )
}
export default ProfilePosts ;
 