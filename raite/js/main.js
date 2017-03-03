jQuery(document).ready(function($) {
    var user = firebase.auth().currentUser;

    if (user != null) {
        console.log(user);
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        alert(user.displayName)
        console.log(user.displayName);
        $('#user_login').text(user.displayName);
    }
});
