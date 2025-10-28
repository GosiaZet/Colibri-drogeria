document.addEventListener("DOMContentLoaded", () => {
  // OBSŁUGA MINIATUR
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      const clickedSrc = thumbnail.src;
      const mainSrc = mainImage.src;

      // Zamiana obrazów
      mainImage.src = clickedSrc;
      thumbnail.src = mainSrc;

      // Zaznaczenie aktywnej miniaturki
      thumbnails.forEach(t => t.classList.remove("selected"));
      thumbnail.classList.add("selected");
    });
  });

  // OBSŁUGA KAFELKÓW POJEMNOŚCI
  const sizeButtons = document.querySelectorAll(".sizes button");

  sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
      sizeButtons.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
});
