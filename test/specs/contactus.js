const ContactUs = require("../pageobjects/contactus.page");
const ContactUsData = require("../fixtures/contactus.data");

describe("Contact Us page", () => {
  let userData

  beforeEach(() => {
    ContactUs.open();
    userData = new ContactUsData();
  });

  it("fill form & valid submit", () => {
    ContactUs.fillForm(userData);

    ContactUs.successfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.successfulContactHeader.getText()).to.contain(
      "Thank You for your Message!"
    );
  });

  it("fill form without firstName", () => {
    userData.withoutFirstName();
    ContactUs.fillForm(userData);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without lastName", () => {
    userData.withoutLastName();
    ContactUs.fillForm(userData);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without emailAddress", () => {
    userData.withoutEmailAddress();
    ContactUs.fillForm(userData);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without comment", () => {
    userData.withoutComment();
    ContactUs.fillForm(userData);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });
});
