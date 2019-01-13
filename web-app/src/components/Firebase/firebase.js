import app from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
// const config = {
//   apiKey: "AIzaSyBLYiaPCg_V_rI0taqDJU4jX-F-fhQbd74",
//   authDomain: "jointdev-web.firebaseapp.com",
//   databaseURL: "https://jointdev-web.firebaseio.com",
//   projectId: "jointdev-web",
//   storageBucket: "jointdev-web.appspot.com",
//   messagingSenderId: "151885305104"
// };
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


class Firebase {
  constructor() {
    app.initializeApp(config);
    this.storage = app.storage();
  }

  getStorage = () => this.storage;
}

export default Firebase;
