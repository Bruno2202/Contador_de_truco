import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCdAZCXyB49EuUJqTEwmoRsjmj-piKlyOg",
    authDomain: "contador-de-truco-lebibe.firebaseapp.com",
    projectId: "contador-de-truco-lebibe",
    storageBucket: "contador-de-truco-lebibe.appspot.com",
    messagingSenderId: "392966204080",
    appId: "1:392966204080:web:969e6f8cda33dc617b6975",
    measurementId: "G-WWHYTPVSW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);