
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBnlibyXlXa2jM7q3WFVxHGT0wnOxpPQKU",
    authDomain: "loginpage-52efb.firebaseapp.com",
    projectId: "loginpage-52efb",
    storageBucket: "loginpage-52efb.firebasestorage.app",
    messagingSenderId: "612155725641",
    appId: "1:612155725641:web:0d568d386d2d09d4d36c98"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event){
    event.preventDefault()
    alert(5)

  })
   
