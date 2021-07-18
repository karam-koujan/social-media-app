import * as React from "react";


const FriendContext = React.createContext() ;


const FriendProvider = ({children})=>{
 const [selectedFriend,setSelectedFriend]=React.useState({}) ;
 const value = {selectedFriend,setSelectedFriend}
    return(
        <FriendContext.Provider  value={value}>
              {children}
        </FriendContext.Provider>
    )
}

const useFriendContext = ()=>{
    const friend = React.useContext(FriendContext);
   if(friend === undefined){
       throw Error(`you dont consume the context inside a context provider`)
   }
   return friend

}

export {FriendProvider,useFriendContext}