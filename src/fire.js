import firebase from 'firebase';

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

export default fire;
