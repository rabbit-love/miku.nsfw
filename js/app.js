import { ImageService } from "./image-service.js";
import { PageController } from "./page-controller.js";

const imageService = new ImageService();
const pageController = new PageController();

const container = document.querySelector("#container");

/**
 * @returns {Promise<void>}
 */
const fetchAndRenderNewImages = async () => {
  /**
   * @param {{url: string, id: string, alt: string}} param0
   * @returns {string}
   */
  const createCard = ({ url, id, alt }) => {
    const card = `
      <a href="pages/detail/index.html?id=${id}">
          <img src="${url}" alt="${alt}">
      </a>
      `;
    return card;
  };

  pageController.searching();
  const response = await imageService.fetchImages(pageController.page());
  pageController.notSearching();

  for (const index in response.data) {
    const photo = response.data[index];
    const figureEl = document.createElement("figure");
    figureEl.classList.add("card-img");
    figureEl.innerHTML = createCard({
      url: photo.url,
      id: photo.id,
      alt: photo.alt,
    });
    container.appendChild(figureEl);
  }
};

fetchAndRenderNewImages();

window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (
      scrollTop + clientHeight >= scrollHeight - 700 &&
      !pageController.isSearching()
    ) {
      pageController.incrementPage();
      fetchAndRenderNewImages();
    }
  },
  {
    passive: true,
  }
);

window.addEventListener("click", function (e) {
  if (document.getElementsByClassName("dropdown")[0].contains(e.target)) {
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "block";
  } else {
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "none";
  }
});
