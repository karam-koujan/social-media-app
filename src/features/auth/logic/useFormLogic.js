import { useState } from "react"

export const useFormLogic = ()=>{
    const [errorMsg,setErrorMsg] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [isShow,setIsShow] = useState(false);
    const handleShow = ()=>{
        setIsShow(!isShow)
     }  

  return {
      errorMsg,
      setErrorMsg,
      isLoading,
      setIsLoading,
      isShow,
      setIsShow,
      handleShow
  }

}