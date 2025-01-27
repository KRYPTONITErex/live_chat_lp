<template>
    <h2>Log In</h2>
  
    <form action="" @submit.prevent="logIn">
  
      <input type="email" placeholder="email" v-model="email" id="email">
      <input type="password" placeholder="password" v-model="password" id="password">
  
      <div v-if="error" class="error">{{ error }}</div>
  
      <button class="button">Log In</button>

  
    </form>
  
  </template>
  
  <script>
  import { ref } from 'vue';
  import useSignin from '../composables/useSignin';
  
  export default {
    setup(props, context) {

  
      let email = ref('');
      let password = ref('');

      let {error, signIN} = useSignin()

  
      let logIn = async () => {
        // console.log(displayName.value, email.value, password.value);

        let res = await signIN(email.value, password.value);
        if(res){
          console.log(res.user);
          context.emit('enterChatroom')

        }
       
      }
  
      return { email, password, logIn, error }
  
    }
  }
  </script>
  
  <style>
  
  /* Centering the form and styling */
  form {
      width: 500px;
      margin: 50px auto;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 0 18px 0 18px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 15px;
  }
  
  /* Input field styling */
  input {
      margin-top: 30px;
      align-self: center;
      width: 90%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 18px 0 18px 0;
      font-size: 16px;
      outline: none;
      transition: border-color 0.3s ease-in-out;
  }
  
  input:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }
  
  /* Button styling */
  .button {
      align-self: center;
      width: 30%;
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      margin-top: 20px;
  }
  
  .button:hover {
      background-color: #0056b3;
  }
  
  /* Heading styling */
  h2 {
      text-align: center;
      font-size: 2rem;
      color: #333;
      margin-bottom: 20px;
  }
  
  /* Responsive design */
  @media (max-width: 500px) {
      form {
          width: 90%;
          padding: 15px;
      }
      
      h2 {
          font-size: 1.8rem;
      }
  }

  span {
    color: hsl(211, 98%, 50%);
    cursor: pointer;
    font-style: italic;

  }
  
  span:hover {
    text-decoration: underline;

  }
  

  </style>