import {InstegramLogo} from "./commonStyle";
import {Link} from "react-router-dom"
const Logo = ({margin,width,mobileMargin})=>{
    return(
    <InstegramLogo width={width} margin={margin} mobileMargin={mobileMargin}>
        <Link to="/">
    <img src="https://www.dafont.com/forum/attach/orig/7/3/737566.png?1" alt="Logo"/>        
        </Link>
   </InstegramLogo>
    )
}
export default Logo