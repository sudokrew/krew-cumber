const { clickElement } = require("./interaction");

/**
 *
 * @param {WebdriverIO} browser
 */
module.exports = function krewcumber(browser) {
  return {
    /**
     * Clicks an element on the page based on text
     * @param {String} text
     */
    click(text) {
      const textSelector = `//*[text()='${text}']`;
      return clickElement(browser, text);
    }
  };
};
