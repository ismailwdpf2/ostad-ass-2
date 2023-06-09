function updateClock() {
    var clockElement = document.getElementById("clock");
    var currentTime = new Date();
    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Format the time values to have leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // Update the clock element with the formatted time
    clockElement.textContent = timeString;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);
  
  // Call the updateClock function once to initialize the clock
  updateClock();
  