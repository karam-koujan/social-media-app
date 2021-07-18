/*
export const usePost = async (endPoint,dataInput,token=false)=>{
    const headers = {
        "Content-Type": "application/json"
      };
      if (token) {
        headers["auth-token"] = localStorage.getItem("auth-token");
      }
      try {
        
        const res = await fetch(endPoint, {
          method: "post",
          headers,
          body: JSON.stringify(dataInput)
        });
        const data = await res.json();
        return data
      
      } catch (err) {
        console.log(err)
      }
}
*/
// const [data,setPost] = usePost();

export const usePost = ()=>{
  const setPost = async(endPoint,dataInput,token=false)=>{
      const headers = {
        "Content-Type": "application/json"
      };
      if (token) {
        headers["token"] = localStorage.getItem("token");
      }
           try{
               const res = await fetch(endPoint,{
                method : "post", 
                headers,
                 body : JSON.stringify(dataInput)
               })
               const data = await res.json();
               return data                      
           }catch(err){
             return err
           }      
    }
    return setPost
}