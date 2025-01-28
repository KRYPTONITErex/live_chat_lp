<template>

    <div class="container">
        <Navbar></Navbar>
        <Chatform></Chatform>

    </div>

  

</template>

<script>
import Chatform from '../components/Chatform'
import { watch } from 'vue';
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser';
import { useRouter } from 'vue-router';


export default {
  components: {
    Chatform, Navbar },
  setup() {
    let router = useRouter();
    let {user} = getUser();
    watch(user,() => {
      if(!user.value){
        router.push({name: 'Welcome'})
      }
    })

    return {user}
  }
}
</script>

<style>

</style>