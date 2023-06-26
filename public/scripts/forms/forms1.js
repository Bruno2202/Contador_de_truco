import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore , collection , getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { doc , updateDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";  

const firebaseConfig = {
  apiKey: "AIzaSyCdAZCXyB49EuUJqTEwmoRsjmj-piKlyOg",
  authDomain: "contador-de-truco-lebibe.firebaseapp.com",
  projectId: "contador-de-truco-lebibe",
  storageBucket: "contador-de-truco-lebibe.appspot.com",
  messagingSenderId: "392966204080",
  appId: "1:392966204080:web:969e6f8cda33dc617b6975",
  measurementId: "G-WWHYTPVSW4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



getDocs(collection(db, "updates" ))
    .then(querySnapshot => {
        const version1 = querySnapshot.docs.reduce((acc, doc) => {
        acc += `<b>${doc.data().Version}<b>`
        return acc    
        }, "")

        const version2 = document.querySelector("[data-js = 'version']")
        version2.innerHTML = version1
})
