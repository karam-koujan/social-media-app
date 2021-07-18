import {Flex} from "../../common/ui/commonStyle" ;
import {ProfileImgApproval,NewProfileImg,Btn} from  "./style";

const ChangeProfileImg = ({imgUrl,setImgUrl,handleChangeProfileImg})=>{

    return(
        <ProfileImgApproval>
        <NewProfileImg size="150px">
          <img src={imgUrl} alt="profile image"/>
        </NewProfileImg>
        <Flex justifyContent="space-between" align-items="center" width="100%">
             <Btn onClick={_=>setImgUrl("")}>
               Deny
             </Btn>
             <Btn onClick={handleChangeProfileImg}>
               Accept
             </Btn>
        </Flex>
</ProfileImgApproval>
    )
}
export default ChangeProfileImg ;