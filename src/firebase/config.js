import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBxYvCkYqeiCqmqDpn2Jdoo_sdimmkBWNk",
    authDomain: "vue-blog-lp.firebaseapp.com",
    projectId: "vue-blog-lp",
    storageBucket: "vue-blog-lp.firebasestorage.app",
    messagingSenderId: "195025310394",
    appId: "1:195025310394:web:5438ef47399d86d6e2a883"
};


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth , timestamp };