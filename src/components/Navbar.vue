<template>
  <nav>
    <div>
        <p>Hi display name</p>
        <p class="email"> Logged in as email </p>
    </div>
    <button class="button" @click="logout">Log Out</button>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase/config';
export default {
    setup() {
        let error = ref(null);
        let logout = async () => {
        // alert('logout')
        try{
            await auth.signOut();
            console.log('user logged out');
        }
        catch(err){
            error.value = err.message
        }
        
    }

    return { logout }
    }

}
</script>

<style scoped>

.button {
  background-color: hsl(211, 98%, 50%);
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100px;
  border-radius: 18px 0 18px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;

}

</style>