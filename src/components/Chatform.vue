<template>
    <div class="chat-container">
        <form action="">
            <textarea
                v-model="message"
                @keydown.enter.prevent="handlesubmit"
                class="chat-input"
                placeholder="type a message & enter to send ..."
            ></textarea>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { auth, timestamp } from '../firebase/config';
import getUser from '../composables/getUser';
import useCollection from '../composables/useCollection';


export default {
    setup() {
        let message = ref('')
        let { user } = getUser()
        let { error, addDoc } = useCollection('neWmessages')

        let handlesubmit = async () => {
            // alert(message.value)
            if(message.value){

                let chat = {
                message: message.value,
                created_at: timestamp(),
                user: user.value.displayName
                }

                await addDoc(chat)
                message.value = ''
            }

            
        }

        return { message , handlesubmit , error , addDoc }
    }


};


</script>

<style>

.chat-container {
    max-width: 80%;
    width: 700px;
    margin: 50px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18vh;

}

.chat-input {
    padding: 10px;
    font-size: 16px;
    height: 100px;

}


</style>