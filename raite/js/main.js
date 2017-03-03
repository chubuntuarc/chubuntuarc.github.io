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
            $('#uid').text(user.uid);
            $('#logout').text("Cerrar sesión");
        } else {
            // No user is signed in.
            $('#logout').text("");
        }
    });
});

function guardarViaje() {
  // A post entry.
  var postData = {
    uid: $('#uid').val().toString(),
    car_type: $('#car_type').val().toString(),
    car_model: $('#car_model').val().toString(),
    car_plates: $('#car_plates').val().toString(),
    origin: $('#origin').val().toString(),
    destination: $('#destination').val().toString(),
    seats: $('#seats').val().toString()eats,
    day: $('#day').val().toString(),
    hour: $('#hour').val().toString(),
    price: $('#price').val().toString(),
    comments: $('#comments').val().toString()
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('travels').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/travels/' + newPostKey] = postData;
  //updates['/user-travels/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
