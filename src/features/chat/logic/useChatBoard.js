import { useEffect, useRef, useState,useReducer} from "react" ;
import {useFriendContext} from "../../../pages/chat/friend-context";
import socket from "../../common/logic/socket" ;

const reducer = (state,action)=>{
    switch(action.type){
        case "add__message":
            return {...state,messages:[...state.messages,action.payload]}
            break
        case "writing__message":
            return {...state,startWriting:action.payload}
            
        case "delete__all":
            return {...state,messages:[]}
            
        default :
         return state ;    
    }
}

export const useChatBoard = (message,userId,dispatch)=>{
  const [state,dispatchAction] = useReducer(reducer,{
      messages:[],
      startWriting:""
})
const {messages,startWriting} = state ;
  const {selectedFriend} = useFriendContext() ;
    const ref = useRef();
    ref.current = selectedFriend._id
    useEffect(()=>{
        socket.connect()
        onFriendStartWriting()
       onReceiveMessage()
  return ()=>{
      dispatchAction({type:"delete__all"})
      socket.disconnect()       
  }
   
},[])

useEffect(()=>{
     dispatchAction({type:"delete__all"})
},[selectedFriend])



const onReceiveMessage = ()=>{

    socket.on("private message",({content,to,from})=>{

               if(to===userId && from===ref.current){
            
                           dispatchAction({type:"add__message",payload:{id:ref.current,message:content}})         
                           

                        }
           }
                    
           )
   
   }
   
  const  onFriendStartWriting = ()=>{
      socket.on("writing message",({content,to,from})=>{

            if(to===userId && from===ref.current){
         
                      dispatchAction({type:"writing__message",payload:content})
         
                  }
        
            }     
        )
  }
  const handleStopWriting = ()=>{
    socket.emit("writing message",   {
        content:"",
        to:selectedFriend._id,
        from:userId
       })
  }
  const handleSendMessage = (e)=>{
        e.preventDefault()
         dispatchAction({type:"add__message",payload:{id:userId,message}})

         socket.emit("private message",{
             content:message,
             to:selectedFriend._id,
             from:userId
         })
         dispatch({type:"text",payload:""})
    }

   
    const handleStartWriting = ()=>{
         socket.emit("writing message",   {
             content:`${selectedFriend.userName} is writing...`,
             to:selectedFriend._id,
             from:userId
            })
    }
    return{
    
        messages,
        handleSendMessage,
        handleStartWriting,
        handleStopWriting,
        startWriting
    }
}

