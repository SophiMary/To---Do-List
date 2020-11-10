import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDBbzgQJeULefbSZDFCahiVw3jnKLesvzs",
    authDomain: "to---do.firebaseapp.com",
    databaseURL: "https://to---do.firebaseio.com",
    projectId: "to---do",
    storageBucket: "to---do.appspot.com",
    messagingSenderId: "406046278974",
    appId: "1:406046278974:web:15f9cb1acc1a74276ed86f"
});

export const auth = app.auth();
export default app;