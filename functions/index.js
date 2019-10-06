const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.createReview = functions.firestore
    .document('reviews/{rating}')
    .onCreate((snap, context) => {
        const newValue = snap.data();
        const rating = newValue.rating;

        console.log(rating);

        var docRef = db.doc('score/main');

        db.runTransaction(transaction => {
            return transaction.get(docRef).then(doc => {
                if (!doc.exists) {
                    console.log("Document does not exist!");
                }
                const newNbReviews = doc.data().nb_reviews + 1;
                const newSumScore = doc.data().sum_score + rating;
                const totalRating = (newSumScore / newNbReviews).toFixed(1);
                return transaction.update(docRef, { nb_reviews: newNbReviews, sum_score: newSumScore, rating: totalRating });
            });
        }).then(() => {
            return console.log("Transaction successfully committed!");
        }).catch(error => {
            return console.log("Transaction failed: ", error);
        });
    });
