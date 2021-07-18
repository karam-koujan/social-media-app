import {Wrapper,Board} from "./style";
import { useNotification } from "../logic/useNotification";

const NotificationBoard = ()=>{
    const {notifications} = useNotification();
    return(
            <Board>
            {notifications.map((notification,notificationIdx)=>(
                 <div key={notificationIdx}>
                     notification
                 </div>
            ))}
            </Board>
    )

}
export default NotificationBoard ;