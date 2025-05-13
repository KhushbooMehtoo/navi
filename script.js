console.log("heelo");
let show = true;
function modal() {
  console.log("chal ra h");
  if (show) {
    document.getElementById("navNest").style.display = "block";

    show = false;
  } else {
    document.getElementById("navNest").style.display = "none";
    show = true;
  }
}
