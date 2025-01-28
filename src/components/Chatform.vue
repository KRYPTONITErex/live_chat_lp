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

export default {
    setup() {
        let message = ref('')
        let { user } = getUser()

        let handlesubmit = () => {
            // alert(message.value)

            let chat = {
                message: message.value,
                created_at: timestamp(),
                user: user.value.displayName
            }
            console.log(chat)
            message.value = ''
        }

        return { message , handlesubmit }
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
    height: 30vh;

}

.chat-input {
    padding: 10px;
    font-size: 16px;
    height: 100px;

}


</style>