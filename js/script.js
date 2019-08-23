let userClosedMenu = false;

//Nav change theme color on scroll + skew
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
        if (!userClosedMenu) {
          nav.classList.add("nav-skew");
          document.querySelector(".menu").classList.add("menu-translate");
        }
        setTimeout(() => {
          nav.style.transition = "background 0.4s ease-in";
          document
            .querySelector(".close-menu")
            .classList.add("close-menu-appear");
        }, 2000);
      } else {
        nav.classList.remove("nav-scrolled");
      }
    });
  }, navOptions);

  observerNav.observe(header);

  //Nav unskew on user input

  document.querySelector(".close-menu").addEventListener("click", function() {
    nav.classList.remove("nav-skew");
    document.querySelector(".menu").classList.remove("menu-translate");
    //Fade out then stop being clickable
    this.style.opacity = 0;
    setTimeout(() => (this.style.visibility = "hidden"), 500);
    userClosedMenu = true;
  });

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
          entry.target.children[0].children[2].classList.remove(
            "demo-code-scroll"
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
      /* Remove project box img opacity and demo/view code added by IntersectionObserver page scroll */
      document.querySelectorAll(".web-project-img").forEach(img => {
        img.classList.remove("web-project-box-scroll");
      });
      document.querySelectorAll(".demo-code").forEach(box => {
        box.classList.remove("demo-code-scroll");
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
