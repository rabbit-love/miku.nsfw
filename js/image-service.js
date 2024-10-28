export class ImageService {
  constructor() {
    this._base = "https://rabbit-love.github.io/miku.nsfw/images"; // URL base de las imágenes
    this._images = this._getAllImages(); // Obtenemos todas las imágenes una sola vez
    this._perPage = 15; // Número de imágenes por página
  }

  /**
   * Simula la obtención de imágenes desde la carpeta local "images".
   * Aquí asumimos que conocemos los nombres de las imágenes o las tenemos previamente cargadas.
   * @returns {Array<{url: string, alt: string, id: string}>}
   */
  _getAllImages() {
    // Lista de nombres de archivos en la carpeta `images`
    const imageNames = [
      "yodayo_landscape_hq_01.jpg",
      "yodayo_landscape_hq_02.jpg",
      "yodayo_landscape_hq_03.jpg",
      "yodayo_landscape_hq_04.jpg",
      "yodayo_landscape_hq_05.jpg",
      "yodayo_landscape_hq_06.jpg",
      "yodayo_landscape_hq_07.jpg",
      "yodayo_landscape_hq_08.jpg",
      "yodayo_landscape_hq_09.jpg",
      "yodayo_landscape_hq_10.jpg",
      "yodayo_landscape_hq_11.jpg",
      "yodayo_landscape_hq_12.jpg",
      "1693086112668.png",
      "1693146073664.png",
      "1693146175463.png",
      "1693146272870.png",
      "1693146434637.png",
      "1693146534201.png",
      "1693147085744.png",
      "1693147173418.png",
      "1693147245703.png",
      "1693147327269.png",
      "1693147461393.png",
      "1693147599165.png",
      "1693147704998.png",
      "1693147814834.png",
      "1693148463372.png",
      "1693148601419.png",
      "1693148725359.png",
      "1693148835492.png",
      "1693148938617.png",
      "1693149278424.png",
      "1693149367822.png",
      "1693149459970.png",
      "1693149594263.png",
      "1693156599270.png",
      "1693156778183.png",
      "1693156895515.png",
      "1693156950801.png",
      "1693157336981.png",
      "1693157405487.png",
      "1693157595981.png",
      "1693157879837.png",
      "1693158014195.png",
      "1693158426315.png",
      "1693158499161.png",
      "1693158553546.png",
      "1693158628227.png",
      "1693158762368.png",
      "1693159480412.png",
      "1693161118562.png",
      "1693161472008.png",
      "yodayo_landscape_hq_13.png",
      "yodayo_landscape_hq_14.png",
      "yodayo_landscape_hq_15.png",
      "yodayo_landscape_hq_16.png",
      "yodayo_landscape_hq_17.png",
      "yodayo_landscape_hq_18.png",
      "yodayo_landscape_hq_19.png",
      "yodayo_landscape_hq_20.png",
      "yodayo_landscape_hq_21.png",
      "yodayo_landscape_hq_22.png",
      "yodayo_landscape_hq_23.png",
      "yodayo_landscape_hq_24.png",
      "yodayo_landscape_hq_25.png",
      "yodayo_landscape_hq_26.png",
      "yodayo_landscape_hq_27.png",
      "yodayo_landscape_hq_28.png",
      "yodayo_landscape_hq_29.png",
      "yodayo_landscape_hq_30.png",
      "yodayo_landscape_hq_31.png",
      "yodayo_landscape_hq_32.png",
      "yodayo_landscape_hq_33.png",
      "yodayo_landscape_hq_34.png",
      "yodayo_landscape_hq_35.png",
      "yodayo_landscape_hq_36.png",
      "yodayo_landscape_hq_37.png",
      "yodayo_landscape_hq_38.png",
      "yodayo_landscape_hq_39.png",
      "yodayo_landscape_hq_40.png",
      "yodayo_landscape_hq_41.png",
      "yodayo_landscape_hq_42.png",
      "yodayo_landscape_hq_43.png",
      "yodayo_landscape_hq_44.png",
      "yodayo_landscape_hq_45.png",
      "yodayo_landscape_hq_46.png",
      "yodayo_landscape_hq_47.png",
      "yodayo_landscape_hq_48.png",
      "yodayo_landscape_hq_49.png",
      "yodayo_landscape_hq_50.png",
      "yodayo_landscape_hq_51.png",
      "yodayo_landscape_hq_52.png",
    ];

    // Generar el objeto de datos de imagen simulando una estructura JSON
    return imageNames.map((fileName) => {
      const url = `${this._base}/${fileName}`;
      const alt = fileName;
      return { url, alt, id: alt };
    });
  }

  /**
   * Obtiene una página de imágenes, con paginación simulada.
   * @param {number} page
   * @returns {Promise<{data: {url: string, alt: string, id: string}[]}>}
   */
  async fetchImages(page) {
    // Cálculo del índice de inicio y fin
    const start = (page - 1) * this._perPage;
    const end = start + this._perPage;

    // Extrae solo las imágenes para la página solicitada
    const data = this._images.slice(start, end);

    return { data };
  }

  /**
   * Obtiene los detalles de una imagen por su ID (nombre de archivo).
   * @param {string} id
   * @returns {{title: string, creator: string, url: string}}
   */
  fetchImage(id) {
    const url = `${this._base}/${id}`;
    return {
      title: id,
      creator: "AI Art",
      url,
    };
  }
}
