//Web project box hover effects on mobile (screen width < 900)
if (document.documentElement.clientWidth < 900) {
  document
    .querySelector(".web-projects")
    .addEventListener("click", function(e) {
      if (e.target.parentElement.className === "web-project-box") {
        let figure = e.target.parentElement.children[0];
        figure.children[1].classList.add("fig-hover-effect");
        figure.children[1].children[0].classList.add("fig-hover-effect");
      }
    });

  document.addEventListener("click", function(e) {
    if (
      e.target.parentElement != null &&
      e.target.parentElement.className !== "web-project-box"
    ) {
      let figcaps = document.querySelectorAll("figcaption");
      for (let i = 0; i < figcaps.length; i++) {
        figcaps[i].classList.remove("fig-hover-effect");
        figcaps[i].children[0].classList.remove("fig-hover-effect");
      }
    }
  });
}

if (document.documentElement.clientWidth < 636) {
  //Changes hamburger icon to a cross if checkbox is checked
  document
    .querySelector("input[name=checkbox]")
    .addEventListener("change", function() {
      console.log("changed.");
      if (this.checked) {
        document.querySelector("nav label").innerHTML =
          '<i class="fas fa-times"></i>';
      }
    });

  //Changes icon back to hamburguer on mouseup anywhere on the page but on the icon
  document.addEventListener("mouseup", function(e) {
    if (document.querySelector("nav input").checked) {
      document.querySelector("nav input").checked = false;
      document.querySelector("nav label").innerHTML =
        '<i class="fas fa-bars"></i>';
    }
  });
}
