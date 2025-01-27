const { ref } = require("vue");
import { auth } from '../firebase/config';


let error = ref(null);

let createAccount = async (displayName, email, password) => {
    try{
        let res = await auth.createUserWithEmailAndPassword(email, password)
        if(!res){
          throw new Error('Could not complete signup')
        }
        res.user.updateProfile({displayName})
        return res
    }
    catch(err){
        // console.log(err.message)
        error.value = err.message
    }
}
    
    
let useSignup = () => {

    return { error, createAccount }
}

export default useSignup;
