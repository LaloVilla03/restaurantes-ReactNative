
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWTHnoHrrZQCduZs6BZGliYlGCrNyXyvg",
    authDomain: "pa-ago23-feb24-68e71.firebaseapp.com",
    projectId: "pa-ago23-feb24-68e71",
    storageBucket: "pa-ago23-feb24-68e71.appspot.com",
    messagingSenderId: "454550296506",
    appId: "1:454550296506:web:abbd67374982561a4d2f83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
