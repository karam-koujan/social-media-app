import {usePost} from "../../../hooks/";

import { useMutation, useQueryClient } from 'react-query';
export const useCreatePost = (data,dispatch)=>{
      const setPost = usePost();
      
        const queryClient  = useQueryClient()
        const postMutation = useMutation(newData=>setPost("https://instegram-clone.herokuapp.com/api/post/createPost",newData,true),{
          onSuccess: () => {
            queryClient.invalidateQueries('posts')
            queryClient.invalidateQueries("profilePosts")
            queryClient.invalidateQueries('explore')
          }
        }) ;
        
        const handlePost =()=>{
          
             postMutation.mutate(data)
            dispatch({type:"clear_all"})      
            
        }
      
   return {
         handlePost
   }
}