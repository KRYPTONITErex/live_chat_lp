const { ref } = require("vue");
import { auth } from "../firebase/config";


let error = ref('');

let logout = async () => {

    // alert('logout')
    try{
        await auth.signOut();
        console.log('user logged out');
    }
    catch(err){
        error.value = err.message
    }
    
}

let useLogout = () => {

    return { error, logout }
}

export default useLogout