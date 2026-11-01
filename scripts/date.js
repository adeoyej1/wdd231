const yearElement = document.querySelector("#currentyear");
const modifiedElement = document.querySelector("#lastModified");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
if (modifiedElement) {
  modifiedElement.textContent = document.lastModified;
}
