const btn = document.querySelectorAll("#rotateBtn");

btn.forEach((button) => {
  let boolType = false;
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;

    if (!boolType) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.transform = "rotate(0deg)";
      boolType = true;
      this.textContent = "Свернуть";
    } else {
      content.style.maxHeight = "0";
      content.style.transform = "rotate(0deg)";
      boolType = false;
      this.textContent = "Развернуть";
    }
  });
});
