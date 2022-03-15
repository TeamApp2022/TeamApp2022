

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
    
 //Add Data...............................
    db.collection("questions_team").add({
    name: "Ada",
    mail: "Lovelace",
    phone: 1815,
    message: "Lovelace",
    
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

    
});
