function ThemePlayInstant(theme) {
  document.getElementById(theme).volume = 0.2;
  document.getElementById(theme).play();
}

function ThemeFadeVolume(theme) {
  var op = document.getElementById(theme).volume;
  var timer = setInterval(function () {
    if (op <= 0) {
      clearInterval(timer);
      document.getElementById(theme).pause();
    }
    document.getElementById(theme).volume = op;
    op -= op * 0.05;
  }, 50);
}

function ThemeUnfadeVolume(theme) {
  document.getElementById(theme).volume = 0.01;
  document.getElementById(theme).play();
  var op = document.getElementById(theme).volume;
  var timer = setInterval(function () {
    if (op >= 0.2) {
      clearInterval(timer);
    }
    document.getElementById(theme).volume = op;
    op += op * 0.01;
  }, 10);
}

function fade(element) {
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      document.getElementById(theme).style.display = "none";
    }
    document.getElementById(theme).style.opacity = op;
    document.getElementById(theme).style.filter =
      "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

function unfade(element) {
  var op = 0.1;
  document.getElementById(theme).style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    document.getElementById(theme).style.opacity = op;
    document.getElementById(theme).style.filter =
      "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

window.onload = function () {
  document.getElementById("close").onclick = function () {
    ThemeUnfadeVolume("audio");
    this.remove();
    return false;
  };
};
