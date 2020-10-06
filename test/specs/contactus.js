const ContactUs = require("../pageobjects/contactus.page");
const ContactUsData = require("../fixtures/contactus.data");

describe("Contact Us page", () => {
  beforeEach(function () {
    ContactUs.open();
  });

  it("fill form & valid submit", () => {
    ContactUs.fillForm(new ContactUsData());

    ContactUs.successfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.successfulContactHeader.getText()).to.contain(
      "Thank You for your Message!"
    );
  });

  it("fill form without firstName", () => {
    let userData = new ContactUsData()
    userData.withoutFirstName()

    ContactUs.fillForm(userData);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without lastName", () => {
    let userData = new ContactUsData()
    userData.withoutLastName()

    ContactUs.fillForm(userData);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without emailAddress", () => {
    let userData = new ContactUsData()
    userData.withoutEmailAddress()

    ContactUs.fillForm(userData);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without comment", () => {
    let userData = new ContactUsData()
    userData.withoutComment()

    ContactUs.fillForm(userData);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });
});
