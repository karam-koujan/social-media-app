import  { useEffect,  useRef,  useState } from "react";
import { useFetch } from "../../../hooks/";

export const useSearchBoard = (userName)=>{
        const [data,setData]=useState({
          pageParams : [],
          pages : []
        })
        
        const setFetch = useFetch();
        const [page,setPage]=useState(1)
        const [isResultExist,setIsResultExist] = useState(true)
        const [hasFetchNext,setHasFetchNext]=useState(true);
        const pageRef = useRef(page);     
       pageRef.current = page
    useEffect(()=>{
              fetchData()
              return()=> {
                  setData({
                      pageParams:[],
                      pages:[]
                })
              }
        },[userName])
        const fetchData = async()=>{
          const regex = new RegExp(/^\s*$/)
          const isUserNameEmpty = regex.test(userName)
          if(isUserNameEmpty){
               return   setIsResultExist(false)
          }
         setPage(1)
         try{
           const res = await setFetch(`https://instegram-clone.herokuapp.com/api/search/${userName}?limit=4&page=${page}`)
           if(res.profiles.length===0){
          return   setIsResultExist(false) 
       
           }
           
           setData(({pageParams,pages})=>(
             { pageParams : [page],
               pages : [res]
             }))
         
         }catch(err){
             console.log(err);
             setIsResultExist(false)
         }

        }



       const fetchPage = async()=>{
        setPage(page=>page+1)
    
        const res = await setFetch(`https://instegram-clone.herokuapp.com/api/search/${userName}?limit=4&page=${pageRef.current}`)
        if(res.profiles.length===0){
          setHasFetchNext(false) 
    
        }
        
        setData(({pageParams,pages})=>
        { 
          return{pageParams : [...pageParams,page],
          pages : [...pages,res]
        }
        })
        
       }


      const fetchMore = ()=> {
        if(hasFetchNext){
          fetchPage()
        }

          
      } 
      return{
          fetchMore,
          data,
          isResultExist
      }
}