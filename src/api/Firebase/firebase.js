import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "reviews-demo-c61d6.firebaseapp.com",
    projectId: "reviews-demo-c61d6",
};

class Firebase {
    constructor() {
        console.log("Init firebase")
        firebase.initializeApp(config);
        console.log(firebase)
        this.db = firebase.firestore();
    }

    // user = uid => this.db.collection('users').doc(uid);
    addReview = obj => this.db.collection('reviews').add(obj);
    score = () => this.db.collection("score").doc("main")

}

export default Firebase;