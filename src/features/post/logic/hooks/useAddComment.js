import {useMutation,useQueryClient} from "react-query" ;
import { useUpdate } from "../../../../hooks/";

export const useAddComment = (text,dispatch,postId)=>{
     const setUpdate = useUpdate()
     const queryClient = useQueryClient();
    const commentMutation = useMutation(newData=>setUpdate("https://instegram-clone.herokuapp.com/api/post/comment",newData,true),{
        onSuccess : ()=>{
          queryClient.invalidateQueries(["posts",postId])
          queryClient.invalidateQueries("posts")
        }         
  })
     const handleComment = ()=>{
             const data = {
               text,
               postId
             }
             commentMutation.mutate(data)
             dispatch({type:"clear_all"})
    }
    
  return {
      handleComment
  }
}