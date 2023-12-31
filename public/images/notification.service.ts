/**
 * for notification we will use FCM
 *
 */
import firebase from 'firebase/app';
import 'firebase/messaging';

const sendNotification = (deviceToken:String,title:String, body:String) => {
  // Initialize Firebase
  firebase.initializeApp({
    messagingSenderId: 'YOUR_SENDER_ID'
  });

  // Get Firebase messaging instance
  const messaging = firebase.messaging();

  // Create a message
  const message = {
    data: {
      title: 'Notification Title',
      body: 'Notification Body',
    },
    token: deviceToken
  };

  // Send the message
  messaging.send(message)
    .then(response => {
      console.log('Notification sent successfully:', response);
    })
    .catch((error) => {
      console.log('Error sending notification:', error);
    });
};