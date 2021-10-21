import React from "react";
import { useFetchQuery } from "../../hooks/";
import {useParams,Redirect} from "react-router-dom";
import {useProfileInfo } from "../../features/profileInfo/logic/useProfileInfo";
import {PageWrapper} from "../../features/common/ui/commonStyle";
import ChangeProfileImg from "../../features/profileInfo/ui/changeProfileImg" ;
import Layout from "../../features/common/layout/layout";
import ProfileInfo from "../../features/profileInfo/ui/profileInfo";
import ProfilePosts from "../../features/profileposts/profilePosts";
import Spinner from "../../features/common/ui/spinner"
const Profile = ()=>{
  const {userName} = useParams();
  const {data,isLoading} = useFetchQuery(["profile",userName],`http://localhost:8080/api/profile/idk/${userName}`); 
  const profileId = useFetchQuery("profileId","http://localhost:8080/api/profile/info/_id");
  const{imgUrl,setImgUrl,handleChangeProfileImg,handleUploadImg} = useProfileInfo(userName) ;
return ( 
      <Layout>
          {!isLoading && !profileId.isLoading ?data.error ? <Redirect to="/404"/>:(
            <React.Fragment>
              <ProfileInfo data={data}  userId={profileId.data._id} handleUploadImg={handleUploadImg} />
               <ProfilePosts _id={data._id} />
                {imgUrl?(
                  <PageWrapper justifyContent="center" alignItems="center">
                  <ChangeProfileImg imgUrl={imgUrl} setImgUrl={setImgUrl} handleChangeProfileImg={handleChangeProfileImg}/>
                  </PageWrapper>):null
                     }            
             </React.Fragment>
          )
          :<Spinner size="50px"/>}  
      </Layout>
  )
}
export default Profile ;