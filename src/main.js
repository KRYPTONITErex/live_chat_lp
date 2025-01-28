import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/config'

import './assets/global.css'

let app;
//need to connect firebase auth system first
auth.onAuthStateChanged(() => {
    if(!app){
    app = createApp(App).use(router).mount('#app')
    }
})




