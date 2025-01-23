
import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBxYvCkYqeiCqmqDpn2Jdoo_sdimmkBWNk",
    authDomain: "vue-blog-lp.firebaseapp.com",
    projectId: "vue-blog-lp",
    storageBucket: "vue-blog-lp.firebasestorage.app",
    messagingSenderId: "195025310394",
    appId: "1:195025310394:web:46a2881257fb7c8ae2a883"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let auth = firebase.auth();

export default { db , timestamp , auth };

