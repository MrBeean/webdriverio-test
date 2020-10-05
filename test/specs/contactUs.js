const ContactUs = require("../pageobjects/contactus.page");

describe("Contact Us page", () => {
  beforeEach(function () {
    ContactUs.open();
  });

  it("fill form & valid submit", () => {
    let data = {
      firstName: "James",
      lastName: "Bond",
      emailAddress: "james.bond@mail.ru",
      comment: "Hi! My name is Bond. James Bond",
    };

    ContactUs.fillForm(data);

    ContactUs.successfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.successfulContactHeader.getText()).to.contain(
      "Thank You for your Message!"
    );
  });

  it("fill form without firstName", () => {
    let data = {
      lastName: "Bond",
      emailAddress: "james.bond@mail.ru",
      comment: "Hi! My name is Bond. James Bond",
    };

    ContactUs.fillForm(data);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without lastName", () => {
    let data = {
      firstName: "James",
      emailAddress: "james.bond@mail.ru",
      comment: "Hi! My name is Bond. James Bond",
    };

    ContactUs.fillForm(data);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without emailAddress", () => {
    let data = {
      firstName: "James",
      lastName: "Bond",
      comment: "Hi! My name is Bond. James Bond",
    };

    ContactUs.fillForm(data);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });

  it("fill form without comment", () => {
    let data = {
      firstName: "James",
      lastName: "Bond",
      emailAddress: "james.bond@mail.ru",
    };

    ContactUs.fillForm(data);

    ContactUs.unsuccessfulContactHeader.waitForDisplayed(3000);
    expect(ContactUs.unsuccessfulContactHeader.getText()).to.contain(
      "Error: all fields are required"
    );
  });
});
