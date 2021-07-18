import React from "react";
import {Link} from "react-router-dom"
import {Waypoint} from "react-waypoint";
import {useSearchBoard} from "../logic/useSearchBoard";
import {Flex,Avatar} from "../../common/ui/commonStyle";
import { Wrapper,NoResult,NoResultWrapper,UserName} from "./style";
import Spinner from "../../common/ui/spinner";
 
const SearchBoard = ({userName})=>{
 const {data,isResultExist,fetchMore}=useSearchBoard(userName)

 return(
           <Wrapper>
             
             {
                   !data.pages.length?!isResultExist?(<NoResult>No Result</NoResult> ):(<NoResultWrapper>
                     <Spinner size="40px"/>
                   </NoResultWrapper>)
                   :data.pages.map((profiles,currentPageIdx)=>(
                          
                     <React.Fragment key={currentPageIdx}>
                      { profiles.profiles.map(({userName,profileImg},postIndex)=>(
                        <Flex alignItems="center" key={postIndex} margin=".5rem 0" >
                            <Link to={`/profile/${userName}`}>
                            <Avatar size="40px">
                                <img src={profileImg} alt="profile image"/>
                            </Avatar>
                            </Link>
                          <UserName>{userName}</UserName>
           
                        </Flex>

                       )) 
                       } 
                          {currentPageIdx===data.pages.length-1?<Waypoint onEnter={()=>fetchMore()}/>:null} 

                         </React.Fragment>
                       ))

                      }
              

           </Wrapper>
                
       )
}
export default SearchBoard