// const FirstRadio = document.getElementById("generalEnquiry");
// const SecondRadio = document.getElementById("supportRequest");
// const FirstBorder = document.getElementById("general-enqiery");
// const SecondBorder = document.getElementById("support-request");
// FirstRadio.addEventListener("change", function () {
//   if (this.checked) {
//     FirstBorder.style.borderColor = "hsl(169, 82%, 27%)";
//   } else if (!this.checked) {
//     container.style.borderColor = "black";
//   }
//   {
//     // Radio is unchecked, reset border color (optional)
//     container.style.borderColor = "black";
//   }
// });
// SecondRadio.addEventListener("change", function () {
//   if (this.checked) {
//     SecondBorder.style.borderColor = "hsl(169, 82%, 27%)";
//   } else if (!this.checked) {
//     // Radio is unchecked, reset border color (optional)
//     this.style.borderColor = "black";
//   }
// });

const radioItems = document.querySelectorAll(".radio-item");

radioItems.forEach((item) => {
  const radio = item.querySelector(".custom-radio");
  radio.addEventListener("change", function () {
    radioItems.forEach((i) => {
      if (i.querySelector(".custom-radio").checked) {
        i.style.borderColor = "hsl(169, 82%, 27%)";
      } else {
        i.style.borderColor = "#ccc";
      }
    });
  });
});
