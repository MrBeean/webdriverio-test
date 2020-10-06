var faker = require('faker');

module.exports = class ContactUsData {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.emailAddress = faker.internet.email();
    this.comment = faker.lorem.text();
  }

  withoutFirstName() {
    this.firstName = null
  }
  withoutLastName() {
    this.lastName = null
  }
  withoutEmailAddress() {
    this.emailAddress = null
  }
  withoutComment() {
    this.comment = null
  }
}
