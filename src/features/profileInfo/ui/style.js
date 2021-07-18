import styled from "styled-components";
import {Flex,Avatar} from "../../common/ui/commonStyle";
export const Wrapper = styled(Flex)`
 width:70%;
 @media(max-width:760px){
   align-items:center;
   flex-direction:column;
   justify-content:center;
   width:100%;
 }
` 
export const ProfileName = styled.p`
 color:#262626;
 font-size :1.5rem;
 font-weight:thin;
 margin:0 1rem 0 0;
 @media (max-width:700px){
   margin-top:.5rem;
}
`
export const UserInfoWrapper = styled(Flex)`

@media (max-width:700px){
   align-items:center;
   justify-content:space-between; 
   margin:1rem 0 0 0; 
   width:100%;
  flex-direction:column;  
  margin:0;
}

`
export const UserNameFollowWrapper = styled(Flex)`
@media (max-width:760px){
  align-items:center;
  justify-content:space-between; 
  margin:1rem 0 0 0; 
  width:100%;
  flex-direction:column;
 margin:0;
 & > button, & > p{
   margin: .5rem 0;
 }
}
`
export const UserInfoList = styled.ul`
 display:flex; 
 justify-content:space-between;
 margin-top:2rem;
 padding:0;
 width:100%;
 @media (max-width:700px){
  display:none; 
}
 `
export const UserInfoListMobile = styled.ul`
  border :#dbdbdb 1px solid;
  border-left:none;
  border-right:none;
  display:none;
  padding:1rem 1rem;
  width:100%;
  @media (max-width:700px){
    align-items:center;
    display:flex;
    
    justify-content :space-between;
    &>li{

      margin-top:.5rem;
    }
  }
  @media (max-width:330px){
    flex-direction:column;
    &>li{

      margin-top:.5rem;
    }
  }
`
 export const UserInfoItem = styled.li`
 color:#262626;

`
export const UserInfoNum = styled.span`
  font-weight:bold;
`
export const FollowBtn = styled.button`
 background-color:#0096F6;
 border-radius:3px;
 font-weight:bold;
 color:white;
 margin-right:6rem;
 padding:.5rem 1rem;
`
export const ProfileImg = styled(Avatar)`
 cursor:pointer;
 position:relative;
 &:hover > div,&:focus >div{
  display:flex;
 }
`
export const AddProfileImgWrapper = styled.div`
   align-items:center;
   background-color :#00000080;
   border-radius:50%;
   display:none;
   height:100%;
   justify-content:center;
   position :absolute;
   top:0;
   width:100%;
`
export const AddImgBtn = styled.button`
  color:white;
  font-size :40px;
`
export const UploadProfileImg = styled.input`
cursor:pointer;
font-size:0;
height:40px;
opacity:0;
position:absolute;
width:40px;
`
export const ProfileImgApproval = styled.div`
  background-color:white;
  border-radius:6px;
  max-width:400px;
  padding:2rem 2rem 1rem 2rem;
  width:80%;
`
export const NewProfileImg = styled(Avatar)`
  margin:0 auto 1rem auto;
`

export const Btn = styled.button`
 color:#0095f6;
 font-size:13px;
 font-weight:bold;
 `
