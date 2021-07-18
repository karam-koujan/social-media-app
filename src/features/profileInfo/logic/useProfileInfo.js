import {useState} from "react" ;
import  {useMutation,useQueryClient} from "react-query" ;
import  {useUpdate,useUpload} from "../../../hooks/";


export const useProfileInfo = (userName)=>{
    const [imgUrl,setImgUrl] = useState("") ;
    const setUpload = useUpload() ;
    const setUpdate = useUpdate();
     const queryClient = useQueryClient();
     const {mutate} = useMutation(newData=>setUpdate("https://instegram-clone.herokuapp.com/api/profile/addProfileImg",newData,true),{
        onSuccess : ()=>{
            queryClient.invalidateQueries('profileImg')
            queryClient.invalidateQueries(["profile",userName])
        }
    })
    const handleUploadImg =async (e)=>{
       try{
        const url = await setUpload(e.target.files[0],"image") ;
        if(url){
            setImgUrl(url)
        }
       }catch(err){
           console.log(err)
       }
    }
  
    const handleChangeProfileImg = () => {
        mutate({profileImg:imgUrl})
       
        setImgUrl("")
    } ;


    return {
        imgUrl ,
         setImgUrl ,
        handleUploadImg,
        handleChangeProfileImg
    }
    
}