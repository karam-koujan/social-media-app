import { useCheckToken, useFetchQuery } from "../../hooks/";
import {FriendProvider} from "./friend-context" ;
import {Wrapper,NoFollowerMessage} from "./style";
import Layout from "../../features/common/layout/layout";
import Friends from "../../features/chat/ui/friends";
import ChatBoard from "../../features/chat/ui/chatBoard";
import Spinner from "../../features/common/ui/spinner";

const Chat = ()=>{
    const userData = useFetchQuery("userData",`https://instegram-clone.herokuapp.com/api/profile/userInfo`); 
    const friends = useFetchQuery("friends","https://instegram-clone.herokuapp.com/api/profile/followers")
       
    
  

   
   return(
       <Layout>
           {!userData.isLoading && !friends.isLoading?  !friends.data.followers.length ? <NoFollowerMessage>No followers exist</NoFollowerMessage>:(
             <FriendProvider>
                 <Wrapper>
                 <Friends  friends={friends.data.followers} />
                 <ChatBoard  userId={userData.data._id}/>
                 </Wrapper>
             </FriendProvider>
           ):<Spinner size="50px"/>}
       </Layout>
   )
}
export default Chat ;