var travels = [];

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

            var ref = firebase.database().ref('travels/');
            ref.on("child_added", function(snapshot){
                var div = document.createElement("div");
                var card = document.createTextNode('<div class="card blue-grey darken-1">'+
                                      '<div class="card-content white-text">'+
                                      '<span class="card-title">'+snapshot.val().origin+' - '+snapshot.val().destination+'</span>'+
                                      '<p>Fecha: '+snapshot.val().day+' Hora: '+snapshot.val().hour+'</p>'+
                                      '<p>Costo: '+snapshot.val().price+' Lugares: '+snapshot.val().seats+'</p>'+
                                      '</div><div class="card-action">'+
                                      '<a href="#">This is a link</a><a href="#">This is a link</a>'+
                                      '</div></div>');
                div.appendChild(card);
                var element = document.getElementById("travels_all");
                element.appendChild(div);
            }
        }
        } else {
            // No user is signed in.
            $('#logout').text("");
        }
    });
});

function save_travel() {
    // A post entry.
    var postData = {
        uid: firebase.auth().currentUser.uid,
        car_type: $('#car_type').val().toString(),
        car_model: $('#car_model').val().toString(),
        car_plates: $('#car_plates').val().toString(),
        origin: $('#origin').val().toString(),
        destination: $('#destination').val().toString(),
        seats: $('#seats').val().toString(),
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

    $('#modal_nuevo').modal('close');
    Materialize.toast('Viaje registrado', 4000);
    return firebase.database().ref().update(updates);
}
