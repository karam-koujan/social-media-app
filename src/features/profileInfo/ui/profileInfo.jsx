import {useFetchQuery} from "../../../hooks/";
import {ProfileImg,AddProfileImgWrapper,AddImgBtn, UploadProfileImg} from "./style" ;
import {UserInfoWrapper,UserInfoListMobile,ProfileName,UserInfoItem,UserInfoList,UserInfoNum,Wrapper,UserNameFollowWrapper} from "./style";
import FollowBtn from "../../follow/ui/";


const ProfileInfo = ({data :{userName,followings,followers,profileImg,_id,userProfile},userId,handleUploadImg})=>{
    const {data,isLoading} = useFetchQuery(["profilePosts",_id],`https://instegram-clone.herokuapp.com/api/profile/${_id}/posts`)
    return(
     <Wrapper  margin="2rem auto" width="60%" alignItems="flex-start">
         <ProfileImg size="150px" tabIndex="0">
             <img src={profileImg} alt=""/>
             {userProfile?
             (
             <AddProfileImgWrapper>

               <AddImgBtn >
                 <UploadProfileImg type="file" onChange={handleUploadImg}/>
                    +
               </AddImgBtn>
               
             </AddProfileImgWrapper>
             ):null
         }
         </ProfileImg>
         <UserInfoWrapper flexDirection="column" margin="1rem 0 0 1rem" width="50%">
             <UserNameFollowWrapper alignItems="center" >
             <ProfileName>
                 {userName}
             </ProfileName>
             {!userProfile?
             (
              <FollowBtn  
              followBgColor="#0096F6"
              unFollowBgColor = "red"
              borderRadius="3px"
              fontWeight="bold"
              followColor="white"
              unFollowColor="white"
              margin=" 0 6rem 0 0"
              padding=".5rem 1rem"
              followings={followings}
              followers ={followers}
              followingId = {_id}
              userId={userId}
              userName={userName}
              />
                
           ):null

             }
             </UserNameFollowWrapper>
             {!isLoading?
             (
               <UserInfoList >
                   <UserInfoItem><UserInfoNum>{data.posts.length}</UserInfoNum> Publication </UserInfoItem>
                   <UserInfoItem><UserInfoNum>{followings.length}</UserInfoNum> Followings </UserInfoItem>
                   <UserInfoItem><UserInfoNum>{followers.length}</UserInfoNum> Followers  </UserInfoItem>
               </UserInfoList>
    
             ):null
            }
            
         </UserInfoWrapper>
         
       {!isLoading?
       ( 
         <UserInfoListMobile>
                  <UserInfoItem><UserInfoNum>{data.posts.length}</UserInfoNum> Publication </UserInfoItem>
                   <UserInfoItem><UserInfoNum>{followings.length}</UserInfoNum> Followings </UserInfoItem>
                   <UserInfoItem><UserInfoNum>{followers.length}</UserInfoNum> Followers  </UserInfoItem>
         </UserInfoListMobile>
        ):null    
        }
     </Wrapper>
 )
}

export default ProfileInfo;