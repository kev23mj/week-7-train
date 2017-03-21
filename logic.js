
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8bRqzyjalJeeI77mFm9uovKXG7rwyS0M",
    authDomain: "week-7-train-schedule.firebaseapp.com",
    databaseURL: "https://week-7-train-schedule.firebaseio.com",
    storageBucket: "week-7-train-schedule.appspot.com",
    messagingSenderId: "1023981265224"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  console.log (database)

    var trainname = "";
    var destination = "";
    var firsttrain = "";
    var frequency = 0;

    // Capture Button Click
    $("#add-train").on("click", function(event) {
      event.preventDefault();


     console.log (this)
      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      trainname = $("#train-name").val().trim();
      destination = $("#destination").val().trim();
      firsttrain = $("#first-train").val().trim();
      frequency = $("#frequency").val().trim();
      firsttrain = moment(firsttrain, "HH:mm").format("X");
     console.log (trainname)
     console.log (destination)
     console.log (firsttrain)
     console.log (frequency)


      // Code for the push
      database.ref().push({

        trainname: trainname,
        destination: destination,
        firsttrain: firsttrain,
        frequency: frequency
      
      });
    });

     database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().trainname);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().firsttrain);
      console.log(childSnapshot.val().frequency);


      // full list of items to the well
      $("#trains").append("<div class='well'><span id='tr'> " + childSnapshot.val().name +
        " </span><span id='email'> " + childSnapshot.val().email +
        " </span><span id='age'> " + childSnapshot.val().age +
        " </span><span id='comment'> " + childSnapshot.val().comment + " </span></div>");

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    