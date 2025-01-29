<template>

    <form class="chat-form">
        <textarea class="chat-input"
            v-model="message" 
            placeholder="Type a message & enter to send"
            @keydown.enter.prevent="handlesubmit">
        </textarea>
    </form>

</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import { timestamp } from '../firebase/config';
import useCollection from '../composables/useCollection';


export default {
    setup() {
        let message = ref('');
        let {user} = getUser();
        let {addDoc} = useCollection('messages');

        let handlesubmit = () => {

            let chat = {
                message: message.value.trim(),
                name: user.value.displayName,
                createdAt: timestamp()
            }
            // console.log(chat);
            
            message.value = '';
            addDoc(chat);

        }
        return { message, handlesubmit, user , addDoc }
    }

}
</script>

<style>

.chat-form {

    margin: 10px 0;

}
.chat-input {
    
    width: 100%;
    height: 100px;
    border-radius: 18px 0 18px 0;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease-in-out;

}

</style>