/*========= Add box shadow on scroll ========*/
const header = document.querySelector(".position");
window.addEventListener("scroll", (eo) => {
  this.scrollY > 50
    ? header.classList.add("activ")
    : header.classList.remove("activ");
});

/*========= Add activ class to links on scroll========*/
const sections = document.querySelectorAll("div[id]");
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 60,
      sectionId = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".menu a[href*=" + sectionId + "] i")
        .classList.add("activ");
    } else {
      document
        .querySelector(".menu a[href*=" + sectionId + "] i")
        .classList.remove("activ");
    }
  });
});

/*========= Dark Mood ========*/
const theme = document.querySelector("header .position a+i");
theme.onclick = () => {
  if (theme.classList.contains("fa-moon")) {
    theme.removeAttribute("class");
    theme.setAttribute("class", "fa-solid fa-circle-half-stroke");
    document.body.classList.add("light");
  } else {
    theme.removeAttribute("class");
    theme.setAttribute("class", "fa-regular fa-moon");
    document.body.classList.remove("light");
  }
};

/*========= Remove Class from btn  ========*/
function removeClass(Selector) {
  var elements = document.querySelectorAll(Selector);
  elements.forEach((element) => {
    element.classList.remove("activ");
  });
}

const projects = document.querySelectorAll(".project"),
  templateBtn = document.getElementById("template"),
  appBtn = document.getElementById("app"),
  allBtn = document.getElementById("all");

/*========= Hide App {Works}  ========*/
templateBtn.onclick = () => {
  removeClass(".links button");
  templateBtn.classList.add("activ");
  projects.forEach((project) => {
    project.dataset.filter == "app"
      ? project.classList.add("activ")
      : project.classList.remove("activ");
  });
  setTimeout(() => {
    projects.forEach((pr) => {
      pr.dataset.filter == "app"
        ? pr.classList.add("hide")
        : pr.classList.remove("hide");
    });
  }, 500);
};

/*========= Hide Tempalte {Works}  ========*/
appBtn.onclick = () => {
  removeClass(".links button");
  appBtn.classList.add("activ");
  projects.forEach((project) => {
    project.dataset.filter != "app"
      ? project.classList.add("activ")
      : project.classList.remove("activ");
  });
  var l = setTimeout(() => {
    projects.forEach((pr) => {
      pr.dataset.filter != "app"
        ? pr.classList.add("hide")
        : pr.classList.remove("hide");
    });
  }, 500);
};
/*========= Show All Works  ========*/
allBtn.onclick = () => {
  removeClass(".links button");
  allBtn.classList.add("activ");
  projects.forEach((pr) => {
    pr.classList.remove("activ", "hide");
  });
};
/*========= Animation Inputs ========*/
const ContactInput = document.querySelectorAll(".inTex");
ContactInput.forEach((input) => {
  input.onfocus = () => {
    input.parentElement.firstElementChild.classList.add("activ");
    input.classList.add("activ");
  };
  input.onblur = () => {
    input.classList.remove("activ");
  };
});
