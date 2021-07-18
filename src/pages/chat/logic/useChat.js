

export const useChat = ()=>{
        const [selectedFriend,setSelectedFriend] = useState({}) ;
        const [messages,setSendMessage] = useState([])

        const userData = useFetchQuery("userData",`http://localhost:8080/api/profile/userInfo`); 
        const friends = useFetchQuery("friends","http://localhost:8080/api/profile/friends")
         
        useEffect(()=>{
            selectFirstFriend()
       },[]) 
       const selectFirstFriend = ()=>{
        if(!friends.isLoading){
             handleSelectFriend(friends.data.friends[0])
             console.log(friends.data)
        }
        
     }
        const handleSelectFriend = (friendData)=>{
                setSelectedFriend(friendData)
        }


        const onReceiveMessage = ()=>{
            socket.on("private message",({content,to,from})=>{
                
               if(to===userId && from===friend){
            
                         setSendMessage(prevMessage=>[...prevMessage,{id:friend,message:content}])
            
                     }
                    }     
                )
        
        }
         const handleSendMessage = ()=>{
              setSendMessage(prevMessage=>[...prevMessage,{id:userId,message}])
              socket.emit("private message",{
                  content:message,
                  to:friend,
                  from:userId
              })
         }
     
         const deleteMessages = ()=>{
             setSendMessage([])
         }
        return  {
               messages,
               selectedFriend,
               userData,
               friends    
        }
}