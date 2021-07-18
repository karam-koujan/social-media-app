import { useEffect,useState } from "react";
import socket from "../../common/logic/socket";
import {useFetchQuery} from "../../../hooks/useFetchQuery";
export const useNotification = ()=>{
      const [notifications,setNotifications] = useState([]);
      const {data,isLoading} = useFetchQuery("userData",`http://localhost:8080/api/profile/userInfo`); 
     useEffect(()=>{
           socket.connect()
           receiveNotification()
           return ()=>{
               socket.disconnect()
           }
     },[])
    const receiveNotification = ()=>{
            
            socket.on("notification",({content,from,to})=>{
               if(!isLoading){

                   if(data._id===to){
                       setNotifications(prevNotifications=>[...prevNotifications,{content,from}])
                   }
               }
            })
        }

        return {
            notifications
        }
}