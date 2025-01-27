<template>
  <div class="login-container">
    <form action="" class="login-form" @submit.prevent="login">
      <h1>Log In</h1>

      <input type="text" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Password" required v-model="password">
      <div v-if="error" class="error">{{ error }}</div>

      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';
export default {

  setup() {

    let email = ref('')
    let password = ref('')

    let { error, signIN } = useLogin()

    let login = async() => {
      // console.log(email.value),console.log(password.value)}

      let res = await signIN(email.value, password.value)
        if(res){
        console.log(res.user)
        
      }

    }

    return { email, password, login, error }
  }
}
</script>

<style>

/* Login container and form */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.login-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
}

.login-form h1 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

/* Input fields */
.login-form input[type="text"],
.login-form input[type="password"] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px 0;
  font-size: 1em;
}

/* Button styles */
.login-form button {
  display: block;
  margin: 20px auto;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  width: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #0056b3;
}

.login-form button:focus {
  outline: 2px solid #0056b3;
}

/* Layout & Responsiveness */
@media (max-width: 768px) {
  .login-form {
    padding: 20px;
  }
}

</style>