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
            console.log(user);
            $('#user_login').text(user.displayName);
            $('#uid').text(user.uid);
            $('#logout').text("Cerrar sesión");
        } else {
            // No user is signed in.
            $('#logout').text("");
        }
    });
});

function guardarViaje(uid, car_type, car_model, car_plates, origin, destination, seats, day, hour, price, comments) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('travels').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/travels/' + newPostKey] = postData;
  updates['/user-travels/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
