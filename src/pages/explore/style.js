import styled from "styled-components";
import {Flex} from "../../features/common/ui/commonStyle";



export const PostsWrapper = styled(Flex)`
margin :2rem auto;
width:90%;

    @media(max-width:760px){
        display:block;
        margin:0;
        padding:0 .5rem;
        width:100%;
    }   
`