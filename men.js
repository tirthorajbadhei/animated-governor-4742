const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function Women() {
  document.location.href = "women.html";
}
function Men() {
  document.location.href = "men.html";
}

function search() {
  let x = document.getElementById("search").value;
  document.location.href = `https://www.flipkart.com/search?q=${x}`;
}

document
  .getElementById("search")
  .addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      event.preventDefault();
      let x = document.getElementById("search").value;
      document.location.href = `https://www.farfetch.com/in/shopping/men/search/items.aspx?q=${x}`;
    }
  });
