import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDdj_2AOoVc1On8iyIKzBEAnR903CQ54eg',
  authDomain: 'slack-clone-5d115.firebaseapp.com',
  projectId: 'slack-clone-5d115',
  storageBucket: 'slack-clone-5d115.appspot.com',
  messagingSenderId: '492222518950',
  appId: '1:492222518950:web:64512302bf0249ea468667',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
