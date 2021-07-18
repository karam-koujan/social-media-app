import {useFollow} from "../logic/useFollow";
import {Button} from "./style";

const FollowBtn = ({followings,followers,followingId,userName,userId,...props}) =>{
   const {isFollowed,handleClick} = useFollow(followers,followingId,userId);
   return(
    <Button {...props} onClick={handleClick} isFollowed={isFollowed}>
    {isFollowed?"unfollow":"follow"}
</Button>
   )
}
export default FollowBtn;
 