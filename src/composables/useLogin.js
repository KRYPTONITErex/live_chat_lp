const { ref } = require("vue");
import { auth } from '../firebase/config';


let error = ref(null);

let signIN = async (email, password) => {
    error.value = null

    try{
        let res = await auth.signInWithEmailAndPassword(email, password)
        if(!res){
          throw new Error('Could not complete login')
        }
        // console.log(res.user)
        return res

    }
    catch (err) {
        console.log(err.message);
        error.value = err.message;
    }

}

let useLogin = () => {

    return { error, signIN }
}

export default useLogin;