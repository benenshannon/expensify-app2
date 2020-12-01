import * as firebase from 'firebase';
//docs - https://firebase.google.com/docs 


//use promises in the firebase file to alert us to when data either
//syncs or doesnt sync

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://expensify-aaec3.firebaseio.com',
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//more can be found in firebase docs - javascript firebase.auth

export {firebase, googleAuthProvider, database as default };

//Adding data to the database 
//database.ref().set({
//    name: 'Ben Shannon',
//      age: 33,
//      stressLevel: 6,
//      job: {
//          title: 'Analyst',
//          company: 'Aon'
//        },
//      isSingle: false,
//      location: {
//          city: 'Windsor',
//          country: 'UK'
//      }
//      //.then below comes from the promises code - 
//      //see promises in playground
//  }).then(() => {
//      console.log('data is saved!');
//  }).catch((error) => {
//      console.log('this failed!!', error);
//  });

////database.ref().set('This is my data');

//database.ref('age').set(34);
//database.ref('location/city').set('Windsor & Eton');

////one way to add new elements to the database
//database.ref('attributes/height').set(188);
//database.ref('attributes/weight').set(90);
//// streamlined way to add new element
//database.ref('attributes').set({weight: 88, height: 190})
//.then(() => {
//    console.log('successfully loaded in!');
//})
//.catch((error2) => {
//    console.log('this is a failure', error2);
//});

//Remove data using remove
//database.ref('isSingle').remove()
//  .then(() => {
//  console.log('removed isSingle');
//  })
//  .catch((error3) => {
//  console.log('this is error 3', error3)
//});

//remove data using set
//database.ref('isSingle').set(null)
//.then(() => {
//    console.log('used set to remove isSingle');
//})
//.catch((error4) => {
//    console.log('this is the fourth error', error4)
//});

//update data
//database.ref().update({
    //update has to be called with an object
//    job: 'Senior analyst',
    //if an object has a parent/child relationship - use the forwardslash
    //below - e.g. to navigate to city child through location parent
//    'location/city': 'Windsor & Eton',
    // can add new data fields - such as office below
//    office: 'London',
    // can remove data using null - such as isSingle, below
//    isSingle: null
//});

//database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Aon Reinsurance',
//    'location/city': 'London'
//});

//Fetching data once
//database.ref('location/city').once('value')
//update ref() above with the relevant object, or leave blank for full
//database call
//.then((snapshot) => {
//   const val =  snapshot.val();
//   console.log(val);
//})
//.catch((error5) => {
//    console.log('fetching data error',error5);
//});

//Fetching data as it updates
//const onValueChange = database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(val.name,'is an', val.job.title,'for',val.job.company);
    //can also be written as:
//    console.log(`${val.name} is ${val.age} years old`)
//}, (error6) => {
//    console.log('Error with data fetching', error6);
//});

//this code below shows that the ".on" subscribe does automatically update
//setTimeout(() => {
//    database.ref('name').set('Benjamin Shannon');
//}, 3500);

//setTimeout(() => {
    //the .off command will un-subsribe from watching, so any future
    // updates will not be included in the snapshot command
//    database.ref().off();
//}, 7000);

//setTimeout(() => {
//    database.ref('age').set(35);
//}, 10500);

//Firebase & it's inability to deal with arrays arrays

//This array isnt stored as an array in firebase (see ref commands below)
//const notes = [{
//     id: '1',
//     title: 'First note',
//     body: 'Note relating to first note'
// },
// {
//     id: '2',
//     title: 'Second note',
//     body: 'Note relating to 2nd note'
// }];

// database.ref('notes').set(notes);
// //Instead the items in the array are stored as separate objects - each 
// // with a separate object id
// database.ref('notes/0/id').set('13');

//looking at how firebase can actually treat arrays
// const firebaseNotes ={
//     notes: {
//         asdfggfg: {
//             title: 'First note',
//             body: 'Note relating to first note'
//         },
//         asdfggfgtesdtg: {
//             title: 'Second note',
//             body: 'Note relating to 2nd note'
//         }
//     }
// };
//import expenses from '../tests/fixtures/expenses';
//database.ref('expenses').push({expenses});

// database.ref('expenses').push({
//     description: 'coffee',
//     note: 'from creperie club',
//     amount: 200,
//     createdAt: 0 
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expensesSnapshot) => {
//         expenses.push({
//             id: expensesSnapshot.key,
//             ...expensesSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// adding child_removed subscription ('child_removed' is a different
//type of event to 'value', and will trigger whenever something is removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//     //snapshot.key is the ID
// });

// //child_changed - similar to child_removed, will trigger when an expense
// // (child) is changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added - will trigger when a child is added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//});

//Fetching data as it updates
// database.ref('expenses')
// .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expensesSnapshot) => {
//         expenses.push({
//             id: expensesSnapshot.key,
//             ...expensesSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });