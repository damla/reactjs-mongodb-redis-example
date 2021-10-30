import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import app from "../../app.js";
import seedData from "../response.js";

chai.use(chaiHttp);

/*
 * Test the /products/all route
 */
describe("/GET/all products", () => {
  it("it should GET all products", async () => {
    let res = await chai.request(app).get("/products/all");

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai.expect(res.body.length).to.equal(seedData.products.list.length);
    chai.expect(
      res.body.every((i) => {
        chai
          .expect(i)
          .to.have.all.keys(
            "_id",
            "name",
            "color",
            "brand",
            "createDate",
            "imgUrl",
            "price"
          );
        chai.expect(i.price).to.have.all.keys("base", "discountAmount");
      })
    );
    assert.deepEqual(
      res.body,
      seedData.products.list,
      "Product list is same with the seed data."
    );
  });
});
