import {useHistory} from "react-router-dom";

export const useLogout = ()=>{
    const history = useHistory();
    
    const handleLogOut = ()=>{
         localStorage.removeItem("token")
         history.replace("/login")
    }

    return {
        handleLogOut
    }
}