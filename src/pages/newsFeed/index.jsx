import React from "react";
import { useCheckToken, useFetchInfiniteQuery,useFetchQuery} from "../../hooks/";
import {Waypoint} from "react-waypoint";
import Layout from "../../features/common/layout/layout";
import Post from "../../features/post/ui/components/post";
import NewPost from "../../features/newPost/ui/newPost";
import {LoadingPost,LoadingNewPost} from "../../features/loading/";

const NewsFeed = ()=>{
  const {data,status,fetchMore,isFetchingNextPage,hasNextPage} = useFetchInfiniteQuery("posts","https://instegram-clone.herokuapp.com/api/post",3)
  const fetchProfileName = useFetchQuery("profileName","https://instegram-clone.herokuapp.com/api/profile/info/userName")
  const fetchProfileImg = useFetchQuery("profileImg","https://instegram-clone.herokuapp.com/api/profile/info/profileImg");
  const fetchProfileId = useFetchQuery("profileId","https://instegram-clone.herokuapp.com/api/profile/info/_id");

  return(
       
        <Layout >
        <main>
           {!fetchProfileName.isLoading&&!fetchProfileImg.isLoading&&!fetchProfileId.isLoading?<NewPost userData={{userName:fetchProfileName.data.userName,profileImg:fetchProfileImg.data.profileImg}}/>:<LoadingNewPost/>}

           { status==="loading"?<LoadingPost/> :data.pages.map((posts)=>(
               
                  posts.posts.map(({image,text,video,postedBy ,_id,likes,comments},currentPost)=>(
                     <React.Fragment key={currentPost}>
                     <Post comments={comments} key={_id} likes={likes} postId={_id} image={image} profileImg={postedBy.profileImg}  postedById={postedBy._id}    text={text} userName={postedBy.userName} video={video} userId={fetchProfileId.data._id}/>
                      {currentPost === posts.posts.length -2 && hasNextPage ? <Waypoint onEnter={()=>fetchMore()}/>:null}
                     </React.Fragment>
                     ))
                     
                     ))
                     
                  }
          
        </main>
        </Layout>
             
          )
        
}
export default NewsFeed; 
/*
                     {currentPageIdx===data.pages.length-1 : null} 


*/