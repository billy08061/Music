import firebase from 'firebase/app'; 
import 'firebase/auth';

const prodConfig = {

apiKey: "AIzaSyC-CpE-ewnknXk2PYQJEhQssbpO7DuiX2I",
    authDomain: "music-production-data-base.firebaseapp.com",
    databaseURL: "https://music-production-data-base.firebaseio.com",
    projectId: "music-production-data-base",
    storageBucket: "",
    messagingSenderId: "189504211204"
}

const devConfig = {
    apiKey: "AIzaSyAHWw38buMl1AXA2zNErQ0l5JpNXZjJO-k",
    authDomain: "music-app-5c8a7.firebaseapp.com",
    databaseURL: "https://music-app-5c8a7.firebaseio.com",
    projectId: "music-app-5c8a7",
    storageBucket: "music-app-5c8a7.appspot.com",
    messagingSenderId: "490358882811"
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;


if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
  };