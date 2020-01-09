import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB-eNlH6e959UXs2a-I0wkHAMnf-0t4Ryg",
  authDomain: "filelists-57511.firebaseapp.com",
  databaseURL: "https://filelists-57511.firebaseio.com",
  projectId: "filelists-57511",
  storageBucket: "filelists-57511.appspot.com",
  messagingSenderId: "100672959363"
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const postsRef = databaseRef.child("posts");
