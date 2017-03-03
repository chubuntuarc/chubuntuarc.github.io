jQuery(document).ready(function($) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log(user);
             $('#user_login').text(user.displayName);
        } else {
            // No user is signed in.
        }
    });
});
