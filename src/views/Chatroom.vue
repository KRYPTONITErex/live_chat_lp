<template>

  <Navbar></Navbar>

  <ChatWindow></ChatWindow>

  <Chatform></Chatform>

</template>

<script>
import ChatWindow from '../components/ChatWindow'
import Chatform from '../components/Chatform'
import Navbar from '../components/Navbar'
export default {
  components: {
    ChatWindow,
    Chatform, Navbar },

}
</script>

<style>

</style>