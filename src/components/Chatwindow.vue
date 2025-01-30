<template>
  
    <div class="chat-window">
        <div class="messages">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at"> {{ message.createdAt }}</span>
                <span class="name"> {{ message.name }} : <span class="message">{{ message.message }}</span> </span>
                
            </div>
        </div>
    </div>


</template>

<script>
import { computed, ref } from 'vue';
import { db } from '../firebase/config';
import { formatDistanceToNow } from 'date-fns';
export default {

    setup() {
        let messages = ref ([]);

        let formattedMessages = computed(() => {
            return messages.value.map(mssg => {
                let formatTime = formatDistanceToNow(mssg.createdAt.toDate());
                return {...mssg, createdAt: formatTime}
            })
        })
    
        
        db.collection('messages').orderBy('createdAt').onSnapshot(
            (snapshot) => {
                // console.log(snapshot.docs);
                let results = [];
                snapshot.docs.forEach(doc => {
                    // console.log(doc.data());
                    let document = {...doc.data(),id: doc.id}
                    // console.log(document);
                        doc.data().createdAt && results.push(document);
                })
                // console.log(results);
                messages.value = results
                
            }
        )
        return { messages, formattedMessages }
    }

}
</script>

<style>
.chat-window {
    margin: 30px;
    display: block;
    width: 80%;
    height: auto;
    max-width: 100%;
    padding: 10px;
    background-color: #fff4dc;
    border-radius: 10px 0px 10px 0px;
    overflow-y: auto;
}

.messages {
    font-style: normal;
    display: block;
    gap: 10px;
    overflow-y: auto;  /* This enables vertical scrolling */
    max-height: 800px;  /* Adjust this height according to your design */
}

.single {
    display: flex;
    flex-direction: column;
    align-content: left;
    padding: 10px;
    margin: 10px 20px;
    /* border-radius: 0px 8px 0px 8px; */
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05);
}

.created-at {
    text-align: right;
    font-size: 12px;
    color: #888;
    margin-bottom: 5px; /* Adds space between created-at and the next line */
}

.message-header {
    display: flex;
    flex-direction: row;
}

.name {
    display: flex;
    font-style: normal;
    justify-content: left;
    font-weight: bold;
    color: #333;
    font-size: 15px;
    margin-right: 5px;
}

.message {
    font-size: 14px;
    color: #1e74ae;
}
</style>