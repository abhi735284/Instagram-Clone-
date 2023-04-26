import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDl9K0TzUv8l8Tqpb3X15R-ViqVBPVaV8o",
  authDomain: "instagram-clone-ab7ce.firebaseapp.com",
  projectId: "instagram-clone-ab7ce",
  storageBucket: "instagram-clone-ab7ce.appspot.com",
  messagingSenderId: "704747324846",
  appId: "1:704747324846:web:76d7a6e836219e77e6b43f",
  measurementId: "G-E319194V61"
};

// Initialize Firebase
const App = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
const db = App.firestore();
const analytics = getAnalytics(App);
export { db, auth, storage };




