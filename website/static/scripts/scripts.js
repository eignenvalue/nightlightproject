document.addEventListener("DOMContentLoaded", function () {
  var bslider = document.getElementById("Slider");
  var output = document.getElementById("brightnessValue");
  output.innerHTML = bslider.value;
  bslider.oninput = function () {
    output.innerHTML = this.value;
  };

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
