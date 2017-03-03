jQuery(document).ready(function($) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
             $('#user_login').text(user.displayName);
             $('#logout').text("Cerrar sesión");
             if( $('#user_login').text() == 'Iniciar sesión'){
                  location.reload(true);
             }
        } else {
            // No user is signed in.
            $('#logout').text("");
        }
    });
});
