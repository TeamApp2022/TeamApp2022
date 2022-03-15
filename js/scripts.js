

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
    // Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDmw8-nulY88ZZp9y8bhAEEoYeibzvA3m4',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: 'semsar-21596'
});

var db = firebase.firestore();
    
    let name = document.getElementById('name');
        let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');

const btn = document.getElementById('btn');

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
