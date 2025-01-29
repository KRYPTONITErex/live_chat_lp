<template>
  
    <div class="chat-window">
        <div class="chat-box">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="createdAt"> {{ message.created_at }}</span>
                <span class="username"> {{ message.user }} : <span class="message"> {{message.message}}</span> </span>
            </div>
        </div>
    </div>

</template>

<script>
import { computed, ref } from 'vue';
import { db } from '../firebase/config';
import { formatDistanceToNow } from 'date-fns'

export default {

    setup() {

        let newmessages = ref([])
        let formattedMessages = computed(()=>{
            return newmessages.value.map((msg)=>{
                let formatTime = formatDistanceToNow(msg.created_at.toDate())
                return {...msg, created_at: formatTime }
            })
        })

        db.collection('neWmessages').orderBy('created_at').onSnapshot(
            (snap)=>{
            // console.log(snap.docs)
            let results = []
            snap.docs.forEach((doc)=>{
                // console.log(doc.data())
                let document = {...doc.data(), id: doc.id}
                // console.log(document)
                doc.data().created_at && results.push(document)
            })
            newmessages.value = results

        })

        return { newmessages , formattedMessages }

    }

}
</script>

<style>

.chat-window {
    /* scroll */

    max-width: 100%;
    width: 500px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 50vh;
    overflow-y: auto;

}

.chat-box {
    padding-left: 20px; 
    font-size: 16px;
    height: 100px;
}

.single {
    margin: 10px;
}

.createdAt {
    display: block;
    font-size: 12px;
    color: #999;
}

.username {
    color: black;
    font-size: 16px;
    font-weight: bold;
    margin-right: 5px;

}

.message {
    margin-left: 5px;
}

</style>