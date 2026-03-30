function calculateScore() {
  let score = 0;

  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;

  if (q1 === "yes") score += 2;
  if (q2 === "no") score += 2;

  localStorage.setItem("score", score);

  window.location.href = "result.html";
}
if (score > 4) {
  resultText += "\nImmediate dental consultation recommended!";
}
navigator.geolocation.getCurrentPosition(function(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  console.log(lat, lon);
});