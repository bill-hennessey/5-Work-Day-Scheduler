console.log("here we go...");

$("#currentDay").text(moment().format("dddd, MMM Do"));

// create text inputs for the rows, or maybe in the rows?

// set a var for the current time
var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(time);

// https://momentjs.com/docs/#/query/is-before/

var foo = moment([2021, 7, 5, 23, 0]);

if (moment().isBefore(foo)) {
  console.log("true");
}
