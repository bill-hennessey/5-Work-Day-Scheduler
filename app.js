console.log("here we go...");
var scheduleHour;
// place current date at the top of the page
$("#currentDay").text(moment().format("dddd, MMM Do"));

// take current time and make it an array
var time = moment().toArray();

// gather all rows and make them an array
var rows = $(".row").toArray();
// gather all columns with textareas in to an array
var allHours = $(".hour").toArray();

// add an event handler to the icons to save input data to local storage
$("i").on("click", function (event) {
  event.preventDefault();

  var task = $("textarea").val();
  console.log(task);
  localStorage.setItem(scheduleHour, task);
  console.log(scheduleHour);
});

// event handler to add styling to rows based on current hour
window.onload = function () {
  for (var i = 0; i < rows.length; i++) {
    var scheduleHour = allHours[i].id;

    var actualHour = time[3].toString();

    if (scheduleHour === actualHour) {
      $(".hour").addClass("present");
    } else if (scheduleHour > actualHour) {
      $(".hour").addClass("future");
    } else {
      $(".hour").addClass("past");
    }
  }
};
