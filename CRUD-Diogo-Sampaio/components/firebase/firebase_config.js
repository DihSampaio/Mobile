import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDGrmdh9sO61CSbKc1sFSDKYtKKo5qhYng",
  authDomain: "crud-2022-1.firebaseapp.com",
  projectId: "crud-2022-1",
  storageBucket: "crud-2022-1.appspot.com",
  messagingSenderId: "465427604936",
  appId: "1:465427604936:web:dfb7ff0ada8903ada14cfd"
};


const app = initializeApp(firebaseConfig);

const firestorageDb = getFirestore(app)

export { firestoreDb }