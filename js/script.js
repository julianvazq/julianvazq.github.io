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
    //   console.log(e.target.parentElement);
    if (e.target.parentElement.className !== "web-project-box") {
      let figcaps = document.querySelectorAll("figcaption");
      console.log(figcaps);
      for (let i = 0; i < figcaps.length; i++) {
        figcaps[i].classList.remove("fig-hover-effect");
        figcaps[i].children[0].classList.remove("fig-hover-effect");
      }
    }
  });
}
