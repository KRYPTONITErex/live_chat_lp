<template>
  <div class="signup-container">
    <form action="" class="signup-form" @submit.prevent="signup">
      <h1>Sign Up</h1>

      <input type="text" placeholder="Display Name" required v-model="displayName">
      <input type="text" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Password" required v-model="password">

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebase/config';

export default {

  setup() {

    let displayName = ref('')
    let email = ref('')
    let password = ref('')

    let error = ref(null)

    let signup = async () => {
      // console.log(displayName.value),console.log(email.value),console.log(password.value)

      try{
        let res = await auth.createUserWithEmailAndPassword(email.value, password.value)
        if(!res){
          throw new Error('Could not complete signup')
        }
        console.log(res.user)
      }
      catch(err){
        // console.log(err.message)
        error.value = err.message
      }
      
    }
    
    return { displayName, email, password , signup }
  }

}
</script>

<style>

/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body and general layout */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

/* Sign up container and form */
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.signup-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
}

.signup-form h1 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

/* Input fields */
.signup-form input[type="text"],
.signup-form input[type="password"] {
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
.signup-form button {
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

.signup-form button:hover {
  background-color: #0056b3;
}

.signup-form button:focus {
  outline: 2px solid #0056b3;
}

/* Layout & Responsiveness */
@media (max-width: 768px) {
  .signup-form {
    padding: 20px;
  }
}

</style>