function testSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
      endTime = (new Date()).getTime();
      showResults(startTime, endTime);
    }
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" + cacheBuster;
  }

  function showResults(startTime, endTime) {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = 7864320;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your internet speed is: " + speedMbps + " Mbps";
  }