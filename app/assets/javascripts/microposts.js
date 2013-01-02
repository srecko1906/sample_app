function countdownChar() {
  micropost_content = document.getElementById("micropost_content");
  chars_remaining   = document.getElementById("chars_remaining");

  chars_remaining.innerHTML = (140 - micropost_content.value.length) + " characters remaining.";
}
