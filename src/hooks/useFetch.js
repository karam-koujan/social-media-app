

export const useFetch =  ()=>{
  const  setFetch  = async(endPoint)=>{ 
    const data = await fetch(endPoint, { 
   method:"get",
   headers : {
      "token" : localStorage.getItem("token"),
     
   }
    })
    return data.json()
  }
  return setFetch
}