import styled from "styled-components" ; 


export const Button = styled.button`
  ${({followBgColor,unFollowBgColor,borderRadius,fontWeight,followColor,unFollowColor,margin,padding,isFollowed})=>`
        background:${isFollowed ?unFollowBgColor  : followBgColor };
        border-radius:${borderRadius};
        color:${isFollowed ?unFollowColor  : followColor};
        font-weight:${fontWeight};
        margin:${margin};
        padding:${padding};
    
  `}
 
`
/*

background-color:#0096F6;
font-weight:bold;
color:white;
margin-right:6rem;
padding:.5rem 1rem;

*/