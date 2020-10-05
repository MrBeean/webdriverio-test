const Page = require("./page");

class ContactUs extends Page {
  get firstName() {
    return $('//*[@name="first_name"]');
  }
  get lastName() {
    return $('//*[@name="last_name"]');
  }
  get emailAddress() {
    return $('//*[@name="email"]');
  }
  get comment() {
    return $('//*[@name="message"]');
  }
  get submitButtons() {
    return $('//*[@value="SUBMIT"]');
  }
  get successfulContactHeader() {
    return $("//div[@id='contact_reply']/h1");
  }
  get unsuccessfulContactHeader() {
    return $("//body");
  }

  open() {
    return super.open("Contact-Us/contactus.html");
  }

  submit() {
    this.submitButtons.click();
  }

  fillForm(data) {
    this.firstName.waitForDisplayed(3000);
    this.firstName.setValue(data.firstName);
    this.lastName.setValue(data.lastName);
    this.emailAddress.setValue(data.emailAddress);
    this.comment.setValue(data.comment);
    this.submit();
  }
}

module.exports = new ContactUs();
