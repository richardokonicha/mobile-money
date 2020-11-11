import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export const writeToDb = (createdUser, firstName, lastName) => {
  // write user data to firestore
  let uid = createdUser.user.uid;
  let email = createdUser.user.email;
  db.collection(`users`).doc(`${uid}`).set(
    {
      uid: uid,
      firstName: firstName,
      lastName: lastName,
      email: email,
      balance: 100,
      joined: firebase.firestore.Timestamp.now(),
    }
  )
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};  

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5CdtPsVHQWbLg53DTYatZPtn9V5hbqII",
    authDomain: "mobile-money-ddb7a.firebaseapp.com",
    databaseURL: "https://mobile-money-ddb7a.firebaseio.com",
    projectId: "mobile-money-ddb7a",
    storageBucket: "mobile-money-ddb7a.appspot.com",
    messagingSenderId: "564905005929",
    appId: "1:564905005929:web:b1e083aa8c99776b43a3f8",
    measurementId: "G-QQXQT5NM0T"
  };

const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export const db = fire.firestore();
