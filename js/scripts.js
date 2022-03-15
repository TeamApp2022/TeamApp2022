

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //firebase...................................
   // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAywyl2G3a2SGvjWoBs69SVr67mtb993CI",
  authDomain: "teamqa-cd730.firebaseapp.com",
  projectId: "teamqa-cd730",
  storageBucket: "teamqa-cd730.appspot.com",
  messagingSenderId: "705235402300",
  appId: "1:705235402300:web:d1fe91bbe57045e20d0d39",
  measurementId: "G-1SFDJVP9LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    let name = document.getElementById('name');
        let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');

let btn = document.getElementById('submitButton');

btn.addEventListener('click', () => {
 //Add Data...............................
    db.collection("questions_team").add({
    name: name.textContent,
    mail: email.textContent,
    phone: phone.textContent,
    message: message.textContent   
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
});
    
    
});
