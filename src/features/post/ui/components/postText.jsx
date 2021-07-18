import React from "react";
import {Txt,SeeMore,UserName} from "../style";
const PostText  = ({text,seeMore,userName,setSeeMore})=>{
   return(
    <Txt margin=".3rem 0 .2rem 1.3rem">
    <UserName fontWeight="bold" margin="0 .2rem 0 0" to={`/${userName}`}>
     {userName}
    </UserName>
{text.length > 55 && !seeMore ?
( 
     <React.Fragment>
    {`${text.slice(0,55)}...`}
     <SeeMore onClick={()=>setSeeMore(!seeMore)} to="#">
         See More
     </SeeMore>

     </React.Fragment>
    ):(
      <React.Fragment>
          {text}
          {text.length>55?
       <SeeMore margin="0 0 0 .2rem" onClick={()=>setSeeMore(!seeMore)} to="#">
           Hide
       </SeeMore>:null
          }            
       </React.Fragment>
    )}
</Txt>
   )
}
export default PostText ;