window.onload = function () {
  document.getElementById("black-screen").onclick = function () {
    ThemeUnfadeVolume("audio");
    Fade("black-screen");
    Unfade("simbolo");
    return false;
  };
};