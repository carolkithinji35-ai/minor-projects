function updateDate() {
  let currentDate = document.querySelector('#date');
  currentDate.innerHTML = new Date()

}
setTimeout(updateDate, 5000);// Update after 5 seconds
setInterval(updateDate, 1000);// Update every second

setInterval(() => {
  let milliseconds = document.querySelector('#milliseconds');
  milliseconds.innerHTML = new Date().getMilliseconds();
 
}, 1);// Update every millisecond
