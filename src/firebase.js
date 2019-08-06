import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyBOlmz1oJfxDHIPRN1VLv-WVLdROsrpOkc",
    authDomain: "vue-fire-todo-9f993.firebaseapp.com",
    databaseURL: "https://vue-fire-todo-9f993.firebaseio.com",
    projectId: "vue-fire-todo-9f993",
    storageBucket: "",
    messagingSenderId: "245515734881",
    appId: "1:245515734881:web:f3a401133568377b"
});

export const db = app.database();
export const todosRef = db.ref('todo');
