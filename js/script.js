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

// /*========= Show & Hide Project ========*/
const buttons = document.querySelector('.links'),
  projects = document.querySelectorAll(".project")
buttons.addEventListener('click', eo => {
  if (eo.target.hasAttribute("id")) {
    buttons.querySelector('.activ').classList.remove('activ')
    eo.target.classList.add('activ')
    let butFil = eo.target.dataset.filter
    projects.forEach(project => {
      let proFil = project.dataset.filter
      if (proFil == butFil || butFil == 'all') {
        project.classList.remove('hide')
        project.classList.add('show')
      } else {
        project.classList.remove('show')
        project.classList.add('hide')
      }
    })
  }
})

/*========= Animation Inputs ========*/
const ContactInput = document.querySelectorAll(".inTex");
ContactInput.forEach((input) => {
  input.onfocus = () => {
    input.parentElement.firstElementChild.classList.add("activ");
    input.classList.add("activ");
  };
  input.onblur = () => {
    input.classList.remove("activ");
    !input.value?input.parentElement.firstElementChild.classList.remove("activ"):'';
  };
});
