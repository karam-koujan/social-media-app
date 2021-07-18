import React from "react"
import {Wrapper,Or,ForgotPass,SignUp} from "../../features/common/ui/commonStyle";
import Logo from "../../features/common/ui/logo"
import LoginForm from "../../features/auth/ui/loginForm";
import  fbLogo from "../../assets/icons/facebook.png";
import LoginWithFb from "../../features/common/ui/loginWithFb";
const Login = ()=>{
  return (
    <React.Fragment>
      <Wrapper padding="2rem 3rem 1rem 3rem">
         <Logo width="180px" margin="0 auto 2.5rem auto"/>
          <LoginForm/>
          <Or>OR</Or>
          <LoginWithFb fbLogo={fbLogo} color="#385185"/>
  <ForgotPass to="#">Forgot password?</ForgotPass>
      </Wrapper>
      <Wrapper padding="0 0 0 2rem">
        <p>
         Don't have an account ?
        <SignUp to="/signup">Sign up </SignUp>
        </p>
      </Wrapper>
    </React.Fragment>
  )
}
export default Login;