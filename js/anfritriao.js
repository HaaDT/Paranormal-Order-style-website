window.onload = function () {
  document.getElementById("close").onclick = function () {
    ThemeUnfadeVolume("audio");
    this.remove();
    return false;
  };
};
