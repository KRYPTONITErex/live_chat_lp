const { ref } = require("vue");
import { db } from "../firebase/config";

let useCollection = (collection) =>{
    let error = ref('');
    let addDoc = async (doc) => {
        try{
            let res = await db.collection(collection).add(doc);
            if(!res){
                throw new Error('Could not add document');
            }
            return res;

        }
        catch(err){
            console.error(err);
            error.value = err.message;
        }

    }

    return { error, addDoc }
}

export default useCollection;