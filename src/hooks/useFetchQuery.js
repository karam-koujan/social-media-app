import {useQuery} from "react-query";
import {useFetch} from "./useFetch"; 
export const useFetchQuery = (query,endPoint,options)=>{
  const setFetch = useFetch() ; 
  const {data,isLoading} = useQuery(query,()=>setFetch(endPoint),options) ;
  return {data,isLoading} ;    
} 