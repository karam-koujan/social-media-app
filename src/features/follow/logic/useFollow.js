import {useEffect, useState} from "react";
import {useUpdate} from "../../../hooks/";
import {useMutation,useQueryClient} from "react-query";
import { useParams } from "react-router";

export const useFollow = (followers,followingId,userId)=>{
    const [isFollowed , setIsFollowed] = useState(false) ;
    const queryClient = useQueryClient()
    const {userName} = useParams()
    useEffect(()=>{
        const didFollow = followers.some(follow=>follow===userId);
        if(didFollow){
            setIsFollowed(true)
        }else{
            setIsFollowed(false)
        }
    },[])
    const setUpdate = useUpdate()  
    const updateFollow = newData =>{
        if(isFollowed){
              return setUpdate("https://instegram-clone.netlify.app//api/profile/unfollow",newData,true)
          }
          console.log(isFollowed)
         return setUpdate("https://instegram-clone.netlify.app//api/profile/follow",newData,true)
    }
    const mutation  = useMutation(updateFollow,{
        onSuccess : ()=>{
            queryClient.invalidateQueries(["profile",userName])
            queryClient.invalidateQueries("friends")

        }
    })
    const handleClick = ()=>{
        mutation.mutate({followingId})
        setIsFollowed(isFollowed=>!isFollowed)
    }
    return {
        isFollowed,
        handleClick
    }
}