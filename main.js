// declaring variables
let bg_color;
let txt_color;
let dark_mode = false;

// function to toggle dark mode
function toggle_dark_mode() {
  // changes the toggle
  dark_mode = !dark_mode; 

  // if dark mode is enabled, change background to black and text to white
  if (dark_mode) {
    bg_color = "black";
    txt_color = "white";
}
  // otherwise change back to normal
  else {
    bg_color = "white";
    txt_color = "black";
  }  

  // changing the document based on the set variables
  document.body.style.backgroundColor = bg_color;
  document.body.style.color = txt_color;

}