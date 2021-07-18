import {useState} from "react";


export const usePostLogic = ()=>{
   
    const [seeMore,setSeeMore] = useState(false);
    const [showDeletePost,setShowDeletePost] = useState(false)
    const [showHeart,setShowHeart] = useState(false);
    /*
    const [style,animate] = useSpring(()=>
    ({ 
        from :{transform : 'scale(0)'},
        config:{duration:100}
    }))
    */
    const handleDoubleLike = (handleLike)=>{
        setShowHeart(true)
        handleLike()
             setTimeout(()=>{
                 setShowHeart(prev=>!prev)
                },1000)
    }
    return {
        seeMore,
        setSeeMore,
        showDeletePost,
        setShowDeletePost,
        showHeart,
        setShowHeart,
        handleDoubleLike,
        
    }
}