import {LogInWithFbBtn,LogInWithFbTxt} from "./commonStyle";

const LoginWithFb = ({fbLogo,color,background,fontSize})=>{
    return(
    <LogInWithFbBtn className="flex" background={background}>
         <div>
              <img src={fbLogo} alt="facebook"/>                  
            </div>  
              <LogInWithFbTxt color={color} fontSize={fontSize}>Log in with Facebook</LogInWithFbTxt>
    </LogInWithFbBtn>
    )
}
export default LoginWithFb;