jQuery(document).ready(function($) {
    $('.modal').modal();
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            $('#user_login').text(user.displayName);
            $('#logout').text("Cerrar sesión");
        } else {
            // No user is signed in.
            $('#logout').text("");
        }
    });
});
