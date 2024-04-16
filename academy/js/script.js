const blogPara = document.querySelectorAll(".BlogPara");

blogPara.forEach((element) => {
  let length = element.innerHTML.slice(0, 100) + "...";
  element.innerHTML = length;
});

const BlogHeading = document.querySelectorAll(".BlogHeading");

BlogHeading.forEach((element) => {
  let length = element.innerHTML.slice(0, 78) + "...";
  element.innerHTML = length;
});

function removePopup() {
  document.getElementById("submit-overlay").style.display = "none";
}

function onSubmit(form) {
  let email = document.querySelector(".subscriber-input").value;
  document.getElementById("submit-overlay").style.display = "block";

  const url =
    "https://granite-api.thoughtstobinary.com/accounts/v1/subscriber/";

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      user_id: 1,
      email: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(() => form.reset());

  return false;
}
