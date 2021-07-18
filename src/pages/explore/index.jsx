import React from "react";
import {useFetchInfiniteQuery,useCheckToken} from "../../hooks/"
import {PostsWrapper} from "./style";
import {Waypoint} from "react-waypoint";
import Layout from "../../features/common/layout/layout";
import ImageOnlyPost from "../../features/post/ui/components/imageOnlyPost";
import Spinner from "../../features/common/ui/spinner"

const Explore = ()=>{
const {data,status,hasNextPage,fetchMore} = useFetchInfiniteQuery("explore","https://instegram-clone.herokuapp.com/api/post",9)

    return(
        <Layout>
             <main>
             <React.Fragment   >
                 {status==="loading"?<Spinner size="50px"/>
                 :(
                     data.pages.map((page,currentPageIdx)=>(
                         
                         <PostsWrapper key={currentPageIdx}  flexWrap="wrap">
                        { page.posts.map(({video,image,_id,likes,comments})=>(
                                 <ImageOnlyPost video={video}  comments={comments} key={_id} _id={_id} likes={likes} image={image} width="30%" height="260px"/>
    
    ))}
    {currentPageIdx === data.pages.length - 1 ? <Waypoint onEnter = {()=> fetchMore()}/> : null}                              
                             </PostsWrapper>
                     ))
              )}
              </React.Fragment>
             </main>
        </Layout>
    )
}
export default Explore ;