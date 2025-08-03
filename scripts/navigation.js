function goBack() {
    window.history.back();
  }
  function goHome() {

const homePage = "/index.html"; 
window.location.href = homePage; 
}
  function goNext() {
 
    alert("Next page navigation logic goes here.");
  }
  document.addEventListener("DOMContentLoaded", () => {
    // Use absolute paths for header and footer
    fetch("/header.html")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load header: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
      })
      .catch(error => console.error(error));
  
    fetch("/footer.html")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load footer: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.body.insertAdjacentHTML("beforeend", data);
      })
      .catch(error => console.error(error));
  });