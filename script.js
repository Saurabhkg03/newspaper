function updateClock() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = daysOfWeek[now.getDay()];
    var monthNames = ['January', 'February', 'March', 'Aprril', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthName = monthNames[month - 1];
    document.getElementById('clock').textContent = dayOfWeek + ', ' + monthName + ' ' + day+ ', '+year;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  




//lock text
// For modern browsers
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('selectstart', disableTextSelection);
  }, false);
  
  // For Internet Explorer < 9
  document.attachEvent('onselectstart', disableTextSelection);
  
  function disableTextSelection(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  }
  