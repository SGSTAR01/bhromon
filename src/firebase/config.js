// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOsG6zJcZuY54g_6VtiHNmyi9dVm3WaO4",
  authDomain: "bhromon-fd9a6.firebaseapp.com",
  projectId: "bhromon-fd9a6",
  storageBucket: "bhromon-fd9a6.appspot.com",
  messagingSenderId: "22448559480",
  appId: "1:22448559480:web:2be2e90725fa34d40e248d",
  measurementId: "G-3KPT64E8FZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export default firebaseConfig;