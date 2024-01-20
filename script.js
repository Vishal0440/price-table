const basic = document.getElementById("basic1").innerText;
const standard = document.getElementById("standard1").innerText;
const premium = document.getElementById("premium1").innerText;

function setPrice(basic, standard, premium) {
  if (basic) {
    alert("Thank you for choosing this plan " + basic);
  } else if (standard) {
    alert("Thank you for choosing this plan " + standard);
  } else if (premium) {
    alert("Thank you for choosing this plan " + premium);
  }
}
