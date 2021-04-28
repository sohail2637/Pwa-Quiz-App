import firebase from "firebase/app";
import "firebase/messaging";


firebase.initializeApp({
  apiKey: "AIzaSyDUILe2fJm7mpwBp2FZcJSHWqutlgY8Xao",
  authDomain: "pushnotification-7a.firebaseapp.com",
  projectId: "pushnotification-7a",
  storageBucket: "pushnotification-7a.appspot.com",
  messagingSenderId: "670560518655",
  appId: "1:670560518655:web:e640c902e43bb61fa967ca",
});
const messaging = firebase.messaging();

export const ConfigerNotification = () => {
    Notification.requestPermission().then((permission) => {
        console.log(permission);
    if (permission === "granted") {
      messaging.getToken()
        //   ({ vapidKey: "<YOUR_PUBLIC_VAPID_KEY_HERE>" })
        .then((currentToken) => {
          if (currentToken) {
            console.log("TOKEN=>", currentToken);
          } else {
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    } else {
      console.log("Unable to get permission to notify.");
    }
        
  });
  return <>...</>;
};
