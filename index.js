// // import our products
const products = require('./lipStick-Products.json');

// // // import a set of tools to talk to Firebase and Firestore
 const { initializeApp, applicationDefault, cert} = require('firebase-admin/app');
 const { getFirestore, Timestamp, FielValue } = require('firebase-admin/firestore');

// // // import our credentials
    const credentials = require('./credentials.json');
    const { deepCopy } = require('@firebase/util');
    const { debugPort } = require('process');

// // // connect to Firebase services
initializeApp({
    credential: cert(credentials)
});

// // //connect to Firestore
const db = getFirestore();
const prodRef = db.collection('products')

// // // create a collection called "Restaurants"


// // //add each Restaurant
// prodRef.add(products[3])
//     .then(doc => {
//         console.log('Added Product!', doc.id)
//     })
//     .catch(err => {
//         console.log(err);
//     });


//reading a doc.

// db.collection('products').doc('Exs1W723EeirCMyOaKkM').get()
// .then(doc => {
//     console.log(doc.id, ' ==> ', doc.data());
// })
// .catch(err => console.error(err));

// prodRef.doc('Exs1W723EeirCMyOaKkM').get()               // shorter way.
// .then(doc => {
//     console.log(doc.id, ' ==> ', doc.data());
// })
// .catch(err => console.error(err));

//retrieve order collections
db.collection('orders').get()
.then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data())
    })
})
.catch(console.error)


// //get all documents

// prodRef.get()
//     .then(snapshot =>{
//         snapshot.forEach(doc => {
//             console.log(doc.id, ' ==> ', doc.data())
//         })
//     })
//     .catch(console.error);

// //find a document


// // querying a collection.
// restRef.where('name', '==', 'Bolay').get()       // go into db collect. "where" Name is equal to "Bolay". Get this document.
//     .then(snapshot => {
//         snapshot.forEach(doc =>{
//             console.log(doc.data());
//         });
//     })
//     .catch(console.error);


//update a doc

// db.collection('products').doc('wLw6QGoRRVUPPaGavSrj').update({SKU: "wLw6QGoRRVUPPaGavSrj"})
// .then(doc => {
//     console.log('updated customers info')
// })
// .catch(err => {
//     console.error(err); 
// });