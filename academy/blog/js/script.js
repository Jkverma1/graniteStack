let Titles = document.querySelectorAll(".blogContent ul li");

Titles.forEach((element) => {
  element.addEventListener("click", function () {
    Titles.forEach((Title) => {
      Title.classList.remove("active");
    });
    element.classList.add("active");
  });
});


