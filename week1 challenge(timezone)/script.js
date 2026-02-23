let displayTime = document.querySelector("#countries");
displayTime.addEventListener("change", (e) => {
  if (e.target.value.length > 0) {
    e.preventDefault();

    let currentTime = moment()
      .tz(e.target.value)
      .format("dddd, MMMM D, YYYY hh:mm a");
    alert(`It is ${currentTime} in ${e.target.value} timezone `);
  } else {
    alert("Please select a country");
  }
});
