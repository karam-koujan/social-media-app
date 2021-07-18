import { Wrapper,Or } from "../../features/common/ui/commonStyle";
import LoginWithFb from "../../features/common/ui/loginWithFb";
import Logo from "../../features/common/ui/logo";
import SignUpForm from "../../features/auth/ui/signupForm";
import fbLogo from "../../assets/icons/facebookwhite.png";
const SignUp = ()=>{
  return(
      <Wrapper padding="2rem 3rem 1rem 3rem">
         <Logo width="180px" margin="0 auto 2.5rem auto"/>
         <p style={{color:"#8E8E8E",fontSize:"1rem",fontWeight:"bold",textAlign:"center"}}>
             Sign up to see photos and videos from your friends
         </p>
        <LoginWithFb fbLogo={fbLogo} background="#0095f6" color="white" fontSize=".9rem"/>
         <Or>
             OR
         </Or>
         <SignUpForm/>
      </Wrapper>
  )
}
export default SignUp ;