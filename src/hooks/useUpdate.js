export const useUpdate = ()=>{
    const setUpdate = async(endPoint,dataInput,token=false)=>{
        const headers = {
          "Content-Type": "application/json"
        };
        if (token) {
          headers["token"] = localStorage.getItem("token");
        }
             try{
                 const res = await fetch(endPoint,{
                  method : "put", 
                  headers,
                   body : JSON.stringify(dataInput)
                 })
                 const data = await res.json();
                 return data                      
             }catch(err){
               return err
             }      
      }
      return setUpdate
  }