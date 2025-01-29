<template>
  
    <div class="chat-window">
        <div class="chat-box" v-for="message in newmessages" :key="message.id">
            <span class="createdAt"> {{ message.created_at.toDate() }}</span>
            <span class="username"> {{ message.user }} : <span class="message"> {{message.message}}</span> </span>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';
import { db } from '../firebase/config';

export default {

    setup() {

        let newmessages = ref([])

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

        return { newmessages }

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

.createdAt {
    display: block;
    font-size: 12px;
    color: #999;
    margin: 10px 0;
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