function showTime(event) {
  event.preventDefault();
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY hh:mm a");
    alert(`It is ${currentTime} in ${event.target.value} timezone `);
  } else {
    alert("Please select a country!");
  }
}

let displayTime = document.querySelector("#countries");
displayTime.addEventListener("change", showTime);
