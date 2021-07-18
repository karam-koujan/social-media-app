import spinnerSvg from "../../../assets/icons/spinner.svg";
import {SpinnerWrapper} from "./commonStyle"

const Spinner = ({size})=>{
    return(
        <SpinnerWrapper size={size}>
            <img src={spinnerSvg}/>
        </SpinnerWrapper>
    )
}
export default Spinner ;