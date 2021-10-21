import {useReducer} from "react" ;
import {useUpload} from "./useUpload";


export const useForm = ()=>{
    const reducer = (state,action)=>{
        switch (action.type) {
          case "showEmoticons":
            return { ...state, showEmoticons: action.payload };
          case "text":
            return { ...state, text: action.payload };
          case "video":
            return { ...state, video: action.payload };
          case "image":
            return { ...state, image: action.payload };
          case "clear_all" :
            return {...state,image:"",text:"",video:""}  
          default:
            return state;
        } 
      }
      const setUpload = useUpload();
      const [{ text, image, video, showEmoticons},dispatch] = useReducer(reducer,{
        showEmoticons:false,
        text: "",
        image: "",
        video: ""
      })
      
      const handleChange = (e)=>{
          dispatch({type:"text",payload:e.target.value})
      }
      const handleUploadImg =async(e)=>{
           const url = await setUpload(e.target.files[0],"image");
           dispatch({type:"image",payload:url})
      }
      const handleUploadVideo =async (e)=>{
          const url = await setUpload(e.target.files[0],"video");
          dispatch({type:"video",payload:url})
      }
      const onEmojiClick = (_, {emoji}) => {
          dispatch({type:"text",payload:text+emoji})
   
        };
        const handleHideMedia = ()=>{
           if(image){
             dispatch({type:"image",payload:""})
           }
           if(video){
            dispatch({type:"video",payload:""})
           }
  
        }
    
        const handleShowEmoticon = ()=>{
            dispatch({type:"showEmoticons",payload:!showEmoticons})
        }
     
        
   return {
         image,
         video,
         text,
         dispatch,
         showEmoticons,
         handleChange,
         handleHideMedia,
         handleUploadImg,
         handleUploadVideo,
         handleShowEmoticon,
         onEmojiClick
   }
}