function Monthly() {
  if (document.querySelector(".MonthBtn").classList.contains("active")) {
    const fee = document.querySelectorAll(".fee");
    fee.forEach((element) => {
      let value = element.innerHTML.replace(",", "");
      element.innerHTML = Math.round(value * 1.15).toLocaleString();
    });
  }

  document.querySelector(".annualBtn").classList.add("active");
  document.querySelector(".MonthBtn").classList.remove("active");
}

function Annualy() {
  if (document.querySelector(".annualBtn").classList.contains("active")) {
    const fee = document.querySelectorAll(".fee");
    fee.forEach((element) => {
      let value = element.innerHTML.replace(",", "");
      element.innerHTML = Math.round(value / 1.15).toLocaleString();
    });
  }
  document.querySelector(".MonthBtn").classList.add("active");
  document.querySelector(".annualBtn").classList.remove("active");
}

function onSubmit(form) {
  let emailId = document.querySelector(".form-email").value;
  document.getElementById("submit-overlay").style.display = "block";

  const url = "https://api-test.granitestack.com/accounts/v1/contact-info/";

  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: emailId,
      website: "https://granitestack.com/Blog",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(() => form.reset());

  return false;
}
