//Check how it works

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const url = "https://httpbin.org";

describe("API checks", async () => {
  it("return status 200", async () => {
    await chai
      .request(url)
      .get("/get")
      .set("accept", "application/json")
      .then(function (res) {
        expect(res).to.have.status(200);
        expect(res.body.origin).to.equal("128.73.220.33");
      })
      .catch(function (err) {
        throw err;
      });
  });

  it("return status 404", async () => {
    await chai
      .request(url)
      .get("/status/404")
      .set("accept", "text/plain")
      .then(function (res) {
        expect(res).to.have.status(404);
      })
      .catch(function (err) {
        throw err;
      });
  });
});
