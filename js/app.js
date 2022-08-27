function showIp() {
  let secondsLeft = 6;
  let interval = setInterval(function () {
    document.getElementById("timer-ip").innerHTML = --secondsLeft;

    if (secondsLeft <= 1) {
      fetch("https://api.ipify.org/?format=json")
        .then((ip) => ip.json())
        .then((data) => {
          const userIp = data.ip;
          const timer = document.querySelector("#timer-ip");
          timer.innerHTML = userIp;
        });
      clearInterval(interval);
    }

  }, 1000);
}