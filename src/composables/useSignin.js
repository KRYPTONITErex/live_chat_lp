const { ref } = require("vue");
import { auth } from "../firebase/config";


let error = ref('');

let signIN = async (email, password) => {

    try{
        let res = await auth.signInWithEmailAndPassword(email, password)
      if(!res){
        throw new Error('Could not create user');
      }
      return res
      
    }
    catch(err){
      console.error(err);
      error.value = err.message;
    }

}



let useSignin = () => {
    return { error , signIN }
}

export default useSignin;