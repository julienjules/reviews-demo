import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/remote-config';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "reviews-demo-c61d6.firebaseapp.com",
    databaseURL: "https://reviews-demo-c61d6.firebaseio.com",
    projectId: "reviews-demo-c61d6",
    storageBucket: "reviews-demo-c61d6.appspot.com",
    messagingSenderId: "946466179657",
    appId: "1:946466179657:web:032dcc7a1a7adb0a674d98",
    measurementId: "G-2XQ24CWZ3Q"
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.db = firebase.firestore();
        this.remoteConfig = firebase.remoteConfig();
        this.remoteConfig.settings = {
            minimumFetchIntervalMillis: 1000,
        };
        this.remoteConfig.defaultConfig = ({
            'statistics': false,
        });
    }

    // user = uid => this.db.collection('users').doc(uid);
    addReview = obj => this.db.collection('reviews').add(obj)
    statistics = () => this.db.collection("score").doc("main")
    reviews = () => this.db.collection("reviews")

}

export default Firebase;