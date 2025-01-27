<template>
  
    <nav>
        <div>
            <p>Hi display name</p>
            <p class="email">Logged in as Email</p>
        </div>
        <button @click="logout">Log Out</button>
    </nav>

</template>

<script>
import { auth } from '../firebase/config';
export default {
    setup() {
        let logout = () => {
            auth.signOut()
            console.log('user logged out')
            
        }

        return { logout }

    }

}
</script>

<style>



</style>