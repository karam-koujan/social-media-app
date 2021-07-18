import {useState} from "react" ;
import {useQueryClient,useMutation} from "react-query";
import {useUpdate} from "../../../../hooks/";

export const useLike = (likes,postId,userId)=>{
    const [isLiked,setIsLiked] = useState(()=>likes.some(like=>like===userId));
    const queryClient = useQueryClient() ;
    const setUpdate = useUpdate()


    const updateLikes = newData =>{
    
        if(isLiked){
      return setUpdate("https://instegram-clone.herokuapp.com/api/post/unlike",newData,true)
    }
          return setUpdate("https://instegram-clone.herokuapp.com/api/post/like",newData,true)
        
        }
    const mutation  = useMutation(updateLikes,{
        onSuccess : ()=>{            
          queryClient.invalidateQueries(["posts",postId])
          queryClient.invalidateQueries("posts")
       }
    })
    
  
    const handleLike = ()=>{
        mutation.mutate({postId})
        
        setIsLiked(isLiked=>!isLiked)
    }
    return {
        isLiked,
        handleLike,
        setIsLiked
    }

}