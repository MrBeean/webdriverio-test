const { iteratee } = require("lodash");
import { expect } from "chai";
const Page = require("../pageobjects/page");

describe("Homepage", () => {
  beforeEach(function () {
    let homePage = new Page();
    homePage.open();
  });

  it("check url", () => {
    let url = browser.getUrl();
    expect(url).to.equal("http://www.webdriveruniversity.com/");
  });

  it("check title", () => {
    let title = browser.getTitle();
    expect(title).to.equal("WebDriverUniversity.com");
  });
});
