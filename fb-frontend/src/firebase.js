import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCwDft8rPjt9kRHTsTadiMPPZgajF_wtmM",
  authDomain: "facebook-clone-aa2e3.firebaseapp.com",
  databaseURL: "https://facebook-clone-aa2e3.firebaseio.com",
  projectId: "facebook-clone-aa2e3",
  storageBucket: "facebook-clone-aa2e3.appspot.com",
  messagingSenderId: "693923136528",
  appId: "1:693923136528:web:1439ecaa129102e16c7695",
  measurementId: "G-JM46XHFMQ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db