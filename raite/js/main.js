jQuery(document).ready(function($) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            if( $('#user_login').text() != user.displayName){
                 location.reload(true);
            }
             $('#user_login').text(user.displayName);
             $('#logout').text("Cerrar sesión");
        } else {
            // No user is signed in.
            $('#logout').text("");
        }
    });
});
