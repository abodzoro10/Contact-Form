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
