import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBrV381dNM-kpzD5YcBKjI6QPZQcEMN3n4",
  authDomain: "kerry-smoothies.firebaseapp.com",
  databaseURL: "https://kerry-smoothies.firebaseio.com",
  projectId: "kerry-smoothies",
  storageBucket: "kerry-smoothies.appspot.com",
  messagingSenderId: "727542070457"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampInSnapshots: true
})

//export firestore database
export default firebaseApp.firestore()
