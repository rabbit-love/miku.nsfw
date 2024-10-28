import { ImageService } from "../../../js/image-service.js";

const imageService = new ImageService();
const urlParams = new URLSearchParams(window.location.search);
const selectedId = urlParams.get("id");

/**
 * @param {string} id
 */
const fetchAndRenderSelectedImage = (id) => {
  const response = imageService.fetchImage(id);

  document.getElementById("img-src").src = response.url;
  document.getElementsByClassName("creator")[0].textContent = response.creator;
  document.getElementsByClassName("title")[0].textContent = response.title;
};

fetchAndRenderSelectedImage(selectedId);

window.addEventListener("click", function (e) {
  if (document.getElementsByClassName("dropdown")[0].contains(e.target)) {
    // Clicked in box
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "block";
  } else {
    // Clicked outside the box
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "none";
  }
});

document
  .getElementsByClassName("download")[0]
  .addEventListener("mousedown", function (e) {
    e.preventDefault();

    const a = document.createElement("a");

    a.download = true;
    a.target = "_blank";
    a.href = imageService.fetchImage(selectedId).url;
    a.click();
  });
