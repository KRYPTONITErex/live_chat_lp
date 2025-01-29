<template>
  <nav v-if="user">
    <div class="user">
        <p>Hi {{ user.displayName }}</p>
        <p class="email"> Logged in as {{ user.email }} </p>
    </div>
    <button class="button" @click="logout">Log Out</button>
  </nav>
</template>

<script>

import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';
export default {
    setup() {

      let {error, logout} = useLogout();
      let {user} = getUser();
    
    return { logout , error , user }
    }

}
</script>

<style scoped>

.user {
  width: 50%;
  display: flex;
}

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

.button:hover {
  background-color: hsl(211, 98%, 40%);

}

p{
  padding: 20px;

}

</style>