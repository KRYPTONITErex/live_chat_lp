<template>
  <h1 class="pageTitle">WELCOME PAGE</h1>

  <div v-if="showLoginSignup">
    <SignUp></SignUp>
    <p>Already have an account?<span @click="showLoginSignup=!showLoginSignup"> Log In ...</span></p>
  </div>

  <div v-if="!showLoginSignup">
    <LogIn></LogIn>
    <p>Don't have an account?<span @click="showLoginSignup=!showLoginSignup"> Sign Up ...</span></p>
  </div>


</template>

<script>
import { ref } from 'vue';
import LogIn from '../components/LogIn'
import SignUp from '../components/SignUp'

export default {
  components: {
    LogIn, SignUp },

    setup() {
      let showLoginSignup = ref(true)

      return { showLoginSignup }
    }

}
</script>

<style>

.pageTitle {
  text-align: center;
  margin-top: 50px;

}

p{
  text-align: center;
  margin-top: 0px;
  font-size: 20px;

}

span{
  color: #007bff;
  cursor: pointer;

}



</style>