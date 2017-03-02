$( document ).ready(function(){
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }

    $('#user_login').text(name);
    $(".button-collapse").sideNav()
})
