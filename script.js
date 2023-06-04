function validateForm() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username === "ks9615276@gmail.com" && password === "Website") {
window.location.href = "work1/index2.html"; // Redirect to Welcome.html
} else {
window.location.href = "Sorry.html"; // Redirect to Sorry.html
}
}