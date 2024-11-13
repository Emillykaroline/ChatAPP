import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCu1pp56WJJt1YJ3ZgMMl4ktTMiDU96kZg",
  authDomain: "projeto-react-native-8fcff.firebaseapp.com",
  projectId: "projeto-react-native-8fcff",
  storageBucket: "projeto-react-native-8fcff.firebasestorage.app",
  messagingSenderId: "838085485548",
  appId: "1:838085485548:web:91a1370bb5fda2f32696c9",
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
