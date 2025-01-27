<template>
  
    <nav v-if="user">
        <div>
            <p>Hi {{ user.displayName }}</p>
            <p class="email">Logged in as {{ user.email }}</p>
        </div>
        <button @click="logout">Log Out</button>
    </nav>

</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import { auth } from '../firebase/config';

export default {
    setup() {
        let error = ref(null)
        let { user } = getUser()

        let logout = async () => {
            try{
                auth.signOut()
                console.log('user logged out')
                }
            catch(err){
                error.value = err.message
                console.log(error.value)

            }
        }

        return { logout , user, error }

    }

}
</script>

<style>



</style>