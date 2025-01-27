<template>

  <div class="welcome-container">

    <div v-if="showLoginForm">
      <LogIn @enterChatroom="enterChatroom"></LogIn>
      <p>Don't have an account?<span @click="showLoginForm = !showLoginForm">Create an Account</span></p>
    </div>

    <div v-else>
      <SignUp></SignUp>
      <p>Already a member?<span @click="showLoginForm = !showLoginForm">Log In your Account</span></p>
    </div>

  </div>

</template>

<script>

import { ref } from 'vue';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'
import { useRouter } from 'vue-router';
export default {
  
  components: {
    LogIn, SignUp },

    setup() {
      let router = useRouter();
      let showLoginForm = ref(true);
      let enterChatroom = () => {
        router.push({name: 'Chatroom'})
      }

      return { showLoginForm , enterChatroom }
    }

}
</script>

<style>

.welcome {
  text-align: center;
  padding: 20px 0;
}

</style>