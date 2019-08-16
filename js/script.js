//Nav change theme color on scroll
if ("IntersectionObserver" in window) {
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");

  const navOptions = {
    rootMargin: "-100px 0px 0px 0px"
  };

  const observerNav = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }
    });
  }, navOptions);

  observerNav.observe(header);

  if (document.documentElement.clientWidth < 636) {
    const boxOptions = {
      threshold: 0.6,
      rootMargin: "-100px 0px 0px 0px"
    };

    const webBoxes = document.querySelectorAll(".web-project-box");

    const observerBox = new IntersectionObserver(function(
      entries,
      observerBox
    ) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          //Web project box
          entry.target.children[0].children[0].classList.add(
            "web-project-box-scroll"
          );
          //Figcaption
          entry.target.children[0].children[1].classList.add(
            "fig-hover-effect"
          );
          //h5 inside figcaption
          entry.target.children[0].children[1].children[0].classList.add(
            "fig-hover-effect"
          );
          //Demo-View Code box
          entry.target.children[0].children[2].classList.add(
            "demo-code-scroll"
          );
        } else {
          entry.target.children[0].children[0].classList.remove(
            "web-project-box-scroll"
          );
          entry.target.children[0].children[1].classList.remove(
            "fig-hover-effect"
          );
          entry.target.children[0].children[1].children[0].classList.remove(
            "fig-hover-effect"
          );
        }
      });
    },
    boxOptions);

    webBoxes.forEach(box => {
      observerBox.observe(box);
    });
  }
}

/* ----- Project web boxes ----- */
//Web project box hover effects on mobile (screen width < 900)
if (document.documentElement.clientWidth < 900) {
  //Add hover effect on click
  document
    .querySelector(".web-projects")
    .addEventListener("click", function(e) {
      if (e.target.parentElement.className === "web-project-box") {
        let figure = e.target.parentElement.children[0];
        figure.children[1].classList.add("fig-hover-effect");
        figure.children[1].children[0].classList.add("fig-hover-effect");
      }
    });
  //Remove hover effect when click nav links or click outside nav
  document.addEventListener("click", function(e) {
    if (
      e.target.parentElement != null &&
      e.target.parentElement.className !== "web-project-box"
    ) {
      /* Remove project box img opacity added by IntersectionObserver page scroll */
      document.querySelectorAll(".web-project-img").forEach(img => {
        img.classList.remove("web-project-box-scroll");
      });
      /* ----------------------------------------------------------*/
      let figcaps = document.querySelectorAll("figcaption");
      for (let i = 0; i < figcaps.length; i++) {
        figcaps[i].classList.remove("fig-hover-effect");
        figcaps[i].children[0].classList.remove("fig-hover-effect");
      }
    }
  });
}

/* ----- Nav bar ----- */
if (document.documentElement.clientWidth < 636) {
  //Changes hamburger icon to a cross if checkbox is checked
  document
    .querySelector("input[name=checkbox]")
    .addEventListener("change", function() {
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
