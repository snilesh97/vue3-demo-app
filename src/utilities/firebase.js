import firebase from 'firebase';

require('firebase/auth');
require('firebase/database');

const firebaseConfig = {
  apiKey: 'AIzaSyAfO3fZ3rjJsjTTbwWlo89BftXa46izsC4',
  authDomain: 'vue3-demo-app.firebaseapp.com',
  databaseURL: 'https://vue3-demo-app.firebaseio.com',
  projectId: 'vue3-demo-app',
  storageBucket: 'vue3-demo-app.appspot.com',
  messagingSenderId: '891939350219',
  appId: '1:891939350219:web:915451803771303ece9d4e',
};

firebase.default.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRefs = db.ref('chats');
export default firebase;
