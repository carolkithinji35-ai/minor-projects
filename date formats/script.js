let today = moment().format("dddd, MMMM D, YYYY ");
let todayElement = document.querySelector("#current-date");
todayElement.innerHTML = `Today is ${today}.`;


//10 years from now, we add 10 years to the current date using moment.js, format it, and display it in the HTML element with the id "future-date".
setInterval(() => {
  let tenYearsFromNow = moment()
    .add(10, "years")//this adds 10 years to add days, months, etc. you can change the first argument to "days", "months", etc.
    .format("dddd, MMMM D, YYYY h:mm:ss a");//this is 12h format, if you want 24h format, use H instead of h
  let tenYearsFromNowElement = document.querySelector("#future-date");
  tenYearsFromNowElement.innerHTML = `Ten years from now, it will be ${tenYearsFromNow}`;
}, 1000);
