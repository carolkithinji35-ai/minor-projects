//challenge 1
let hawaiiTime = moment()
  .tz("Pacific/Honolulu")
  .format("MMMM Do YYYY, h:mm A");
let hawaiiCurrentTime = document.querySelector("#current-date");
hawaiiCurrentTime.innerHTML = `It is ${hawaiiTime} in Honolulu, Hawaii.`;

//challenge 2
setInterval(() => {
  let futureDate = moment() //get the current date and time
    .add(10, "years") //add 10 years to the current date and time
    .tz("Europe/Paris") //set the time zone to Paris, France
    .format("MMMM Do YYYY, h:mm:s A"); //format the date and time in a readable format
  let parisFutureDate = document.querySelector("#future-date");
  parisFutureDate.innerHTML = `10 years from now, it will be ${futureDate} in Paris, France.`;
}, 1000);

//challenge 3
let localTimeZone = moment.tz.guess(); //guess the user's local time zone
let localTime = document.querySelector("#local-time-zone");
localTime.innerHTML = `Your local time zone is ${localTimeZone}.`;
