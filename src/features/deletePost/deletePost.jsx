import {List,DeletePostBtn,Wrapper,ListItem} from "./style";
import {useMutation,useQueryClient} from "react-query" ;
import {useDelete} from "../../hooks/";
const DeletePost = ({setShow,userId,postedById,postId})=>{
    const setDelete = useDelete();
    const queryClient = useQueryClient();
    const {mutate} = useMutation(newData=>setDelete("https://instegram-clone.herokuapp.com/api/post/deletePost",newData,true),{
        onSuccess : ()=>{
            queryClient.invalidateQueries("posts")
            queryClient.invalidateQueries(["profilePosts",postId])           
        }
    })
    const handleDelete = ()=>{
       mutate({postId})
       setShow(false)
    }
  return(
    <Wrapper>
       <List>
         <ListItem>
             <DeletePostBtn  isAllowed={userId===postedById} disabled={userId!==postedById} onClick={handleDelete}> 
           Delete post
             </DeletePostBtn>
         </ListItem>
          <ListItem>
              <button onClick={e=>setShow(false)}>
                  Deny
              </button>
          </ListItem>
       </List>

    </Wrapper>
   
  )

}

export default DeletePost ;