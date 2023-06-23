import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAyrK9LSvMSrjaZm0WXdLcPZsI3MpT-F8Y",
  authDomain: "oedae-ro-81.firebaseapp.com",
  projectId: "oedae-ro-81",
  storageBucket: "oedae-ro-81.appspot.com",
  messagingSenderId: "636529503231",
  appId: "1:636529503231:web:c13e9ea03c88f7dbd515ca",
  measurementId: "G-VV9WTLHR1E",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
