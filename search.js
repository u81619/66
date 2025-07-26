document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  input.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(function (card) {
      const title = card.querySelector("h5").innerText.toLowerCase();
      if (title.includes(value)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
});
