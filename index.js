
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, ref, child, get, onValue, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBESEfQP__J2rCfIJ1rXu3Yes08wblvbXw",
    authDomain: "humberproject-e1bb2.firebaseapp.com",
    projectId: "humberproject-e1bb2",
    storageBucket: "humberproject-e1bb2.appspot.com",
    messagingSenderId: "561057174959",
    appId: "1:561057174959:web:8c5096eec4cdb1f5bdcb5a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();
  const messages= ref(database,"messages");
  onValue(
    messages,(snapshot)=>{
        console.log(snapshot);
     const ul= document.getElementById("messages");
ul.replaceChildren();
     snapshot.forEach((childSnapshot)=>{
        console.log(childSnapshot.key);
        console.log(childSnapshot.val());
 const childData= childSnapshot.val();
 const text= document.createTextNode(childData.message + "~" +  childData.name);
 const li = document.createElement("li");
 li.appendChild(text);
 ul.appendChild(li);
     });
        
    }
);
