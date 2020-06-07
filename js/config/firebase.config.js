var firebaseConfig = {
  apiKey: "AIzaSyAupGKjbvYQsd3lDj9KeZ9uBFYWCTBQKgY",
  authDomain: "fire-app-fd392.firebaseapp.com",
  databaseURL: "https://fire-app-fd392.firebaseio.com",
  projectId: "fire-app-fd392",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();
