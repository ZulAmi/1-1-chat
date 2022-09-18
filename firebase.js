import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBe_q7zlJGtykrhsUzCKNS_5ySVPKWLW0w",
    authDomain: "whatsapp-2-62f53.firebaseapp.com",
    projectId: "whatsapp-2-62f53",
    storageBucket: "whatsapp-2-62f53.appspot.com",
    messagingSenderId: "1098855290563",
    appId: "1:1098855290563:web:3acd393bd0bbbb65cdf476"
};

const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };