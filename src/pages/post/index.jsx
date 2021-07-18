import React from "react"
import {useParams,Redirect} from "react-router-dom";
import {useFetchQuery} from "../../hooks/";
import Layout from "../../features/common/layout/layout";
import SelectedPost from "../../features/post/ui/components/selectedPost";
import Spinner from "../../features/common/ui/spinner";
const PostPage = ()=>{
    const {id} = useParams();
    const {isLoading,data} = useFetchQuery(['posts',id],`https://instegram-clone.herokuapp.com/api/post/${id}`); 
    const userData=useFetchQuery("userData","https://instegram-clone.herokuapp.com/api/profile/userInfo")
    return(
           
                <Layout>
                    
              { !isLoading&&!userData.isLoading?!data.post?<Redirect to="/404"/>:(
               <SelectedPost  comments={data.post.comments} key={data.post._id} likes={data.post.likes} userId={userData.data._id} postedById={data.post.postedBy._id} postId={data.post._id} image={data.post.image} profileImg={data.post.postedBy.profileImg}    text={data.post.text} userName={data.post.postedBy.userName} video={data.post.video}/>                  

              ):<Spinner size="50px"/>}                   
                </Layout>
                 
                 
            
        )
            
    }
export default PostPage ;
      