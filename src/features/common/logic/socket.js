import {io} from "socket.io-client" ;


const socket = io("https://instegram-clone.herokuapp.com",{autoConnect:false});
export default socket