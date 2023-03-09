function testSpeed() {
    var startTime, endTime;
    var download = new Image();
    var upload = new XMLHttpRequest();
  
    download.onload = function() {
      endTime = (new Date()).getTime();
      showResults((endTime - startTime) / 1000);
    }
  
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = "https://cachefly.cachefly.net/100mb.test" + cacheBuster;
  
    upload.onreadystatechange = function() {
      if (upload.readyState == 4 && upload.status == 200) {
        endTime = (new Date()).getTime();
        showResults((endTime - startTime) / 1000);
      }
    }
  
    startTime = (new Date()).getTime();
    var params = "download=" + (new Date()).getTime();
    upload.open("POST", "/upload.php", true);
    upload.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    upload.send(params);
  
    document.getElementById("test-btn").disabled = true;
    document.getElementById("result").innerHTML = "Testing...";
  }
  
  function showResults(speed) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Your internet speed is " + speed.toFixed(2) + " Mbps.";
    document.getElementById("test-btn").disabled = false;
  }
  