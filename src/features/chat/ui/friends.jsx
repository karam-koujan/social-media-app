import { useEffect } from "react";
import {FriendsWrapper,Friend,Heading,FriendsList,UserName} from "./style";
import {Avatar} from "../../common/ui/commonStyle";
import {useFriendContext} from "../../../pages/chat/friend-context";
const Friends = ({friends})=>{
    
    const {selectedFriend,setSelectedFriend} = useFriendContext() ;
    useEffect(()=>setSelectedFriend(friends[0]),[])
     return(    
       <FriendsWrapper>
           <Heading>
               Friends
           </Heading>
           <FriendsList>
               {
                friends.length!==0 ? friends.map((friend,idx)=>
                    ( 
                   <Friend key={idx} onClick={()=>setSelectedFriend(friend)} tabIndex="0" currentSelectedFriend={selectedFriend._id === friend._id}>
                        <Avatar size="50px">
                           <img src={friend.profileImg} alt="profileImg" />
                        </Avatar>
                        <UserName removeInMobile={true}>
                            {friend.userName}
                        </UserName>
                   </Friend>
                    ))                  
                    :"isLoading"
             }
           </FriendsList>
       </FriendsWrapper>        
   )
}

export default Friends ; 