export class PageController {
  constructor() {
    this._page = 1;
    this._isSearch = false;
    this._limit = 15;
  }

  /**
   * @returns {void}
   */
  incrementPage() {
    this._page++;
  }

  /**
   * @returns {void}
   */
  searching() {
    this._isSearch = true;
  }

  /**
   * @returns {void}
   */
  notSearching() {
    this._isSearch = false;
  }

  /**
   * @returns {number}
   */
  page() {
    return this._page;
  }

  /**
   * @returns {boolean}
   */
  isSearching() {
    return this._isSearch;
  }
}
