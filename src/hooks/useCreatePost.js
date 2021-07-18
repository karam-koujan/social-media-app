import {useReducer} from "react";
import {usePost} from "./usePost";
import {useUpload} from "./useUpload";
import {useUpdate} from "./useUpdate";
import { useMutation, useQueryClient } from 'react-query';
import {useParams} from "react-router-dom";
export const useCreatePost = (endPoint)=>{
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
      const setPost = usePost();
      const setUpdate = useUpdate();
      const postId = useParams();
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
           }else if(video){
            dispatch({type:"video",payload:""})
           }
  
        }
      
        const queryClient  = useQueryClient()
        const postMutation = useMutation(newData=>setPost(endPoint,newData,true),{
          onSuccess: () => {
            queryClient.invalidateQueries('posts')
          }
        }) ;
        const handleShowEmoticon = ()=>{
            dispatch({type:"showEmoticons",payload:!showEmoticons})
        }
        const handlePost =()=>{
          const now = Date.now();
          const data = {
            text,
            image,
            video,
            postDate: now
          }
           postMutation.mutate(data)
            dispatch({type:"clear_all"})        
        }
        const commentMutation = useMutation(newData=>setUpdate(endPoint,newData,true),{
              onSuccess : ()=>{
                queryClient.invalidateQueries(['post',postId])
              }         
        })
         const handleComment = (postId)=>{
                 const data = {
                   text,
                   postId
                 }
                 commentMutation.mutate(data)
                 dispatch({type:"clear_all"})
        }
   return {
         image,
         video,
         text,
         showEmoticons,
         handleChange,
         handleHideMedia,
         handleUploadImg,
         handleUploadVideo,
         handlePost,
         handleShowEmoticon,
         handleComment,
         onEmojiClick
   }
}