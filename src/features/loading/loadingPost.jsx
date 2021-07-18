import {Wrapper,Circle,Rectangle} from "./style";
import {Flex} from "../common/ui/commonStyle";
const LoadingPost = ()=>{
    return( 
         
            <Wrapper padding="0 0 .9rem 0">
                <Flex  alignItems="center" margin=".5rem .5rem">
                 <Circle width="35px" height="35px"></Circle>
                 <Rectangle width="30%" height="10px"></Rectangle>
                </Flex>
                <Rectangle width="100%" height="450px">
                </Rectangle>
                <Flex  margin="1rem .5rem">
                <Circle width="20px" height="20px"></Circle>
                <Circle width="20px" height="20px"></Circle>
  
                </Flex>
            </Wrapper>
        )
}
export default LoadingPost ;