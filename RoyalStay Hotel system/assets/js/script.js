// Simple fade animation
window.addEventListener("load", () => {
document.querySelectorAll('.fade').forEach(el => {
el.style.opacity = 0;
setTimeout(() => {
el.style.transition = '1.5s';
el.style.opacity = 1;
}, 300);
});
});
// script.js


// script.js
document.addEventListener("DOMContentLoaded", () => {
console.log("Hotel UI Loaded Successfully!");
});