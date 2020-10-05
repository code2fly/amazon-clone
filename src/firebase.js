import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBI3DHdBblJddhfHUKBzjiGqyRw35CvvrI",
    authDomain: "clone-react-d7f87.firebaseapp.com",
    databaseURL: "https://clone-react-d7f87.firebaseio.com",
    projectId: "clone-react-d7f87",
    storageBucket: "clone-react-d7f87.appspot.com",
    messagingSenderId: "502356229097",
    appId: "1:502356229097:web:60ef143c881d3bce192978"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };