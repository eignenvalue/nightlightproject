document.addEventListener("DOMContentLoaded", function () {
  var bslider = document.getElementById("Slider");
  var output = document.getElementById("brightnessValue");
  output.innerHTML = bslider.value;
  bslider.oninput = function () {
    output.innerHTML = this.value;
  };

  

  document.getElementById("timerInput").addEventListener("input", function () {
    let value = parseInt(this.value, 10);
    if (isNaN(value)) {
      this.value = "";
    } else if (value > 60) {
      this.value = 60;
    } else if (value < 0) {
      this.value = 0;
    }
  });

  var timerInput = document.getElementById("timerInput");
  var outputDuration = document.getElementById("durationValue");
  outputDuration.innerHTML = timerInput.value;

  timerInput.oninput = function () {
    outputDuration.innerHTML = this.value;
  };

  getWindow().setNavigationBarContrastEnforced(false);
  getWindow().setNavigationBarColor(this.bgColor.TRANSPARENT);
  getWindow().setStatusBarColor(this.bgColor.TRANSPARENT);
});
