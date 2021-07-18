import {Wrapper,Circle,Rectangle} from "./style";
import {Flex} from "../common/ui/commonStyle";


const LoadingNewPost = ()=>{
  return(
   <Wrapper padding=".5rem">
     <Flex justifyContent="space-between" alignItems="center" width="100%" >
     <Circle width="40px" height="40px"></Circle>
     <Circle width="20px" height="20px"></Circle>
    </Flex>
    <Flex  alignItems="center" margin="4rem 0 0 0">
    <Circle width="20px" height="20px"></Circle>
    <Circle width="20px" height="20px"></Circle>
    </Flex>
  </Wrapper>
    )
}
export default LoadingNewPost ;