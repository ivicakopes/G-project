import firebase from 'firebase';

 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyCubyHKogCMsmGyWx8GsCHKT4ovBpvclB8",
    authDomain: "gproj-54f83.firebaseapp.com",
    databaseURL: "https://gproj-54f83.firebaseio.com",
    projectId: "gproj-54f83",
    storageBucket: "gproj-54f83.appspot.com",
    messagingSenderId: "688376332345"
  };
  const fire = firebase.initializeApp(config);
export default fire;