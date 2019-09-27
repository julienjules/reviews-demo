import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "",
    projectId: "",
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.db = firebase.firestore();
    }

    // user = uid => this.db.collection('users').doc(uid);
    // addOrder = obj => this.db.collection('orders').add(obj);

}

export default Firebase;