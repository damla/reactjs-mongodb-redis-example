import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import app from "../../app.js";
import seedData from "../response.js";

chai.use(chaiHttp);

/*
 * Test the /colors/all route
 */
describe("/GET/all colors", () => {
  it("it should GET all of the colors", async () => {
    let res = await chai.request(app).get("/colors/all");

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai.expect(res.body.length).to.equal(seedData.colors.list.length);
    chai.expect(
      res.body.every((i) =>
        chai.expect(i).to.have.all.keys("_id", "name", "products")
      )
    );
    assert.deepEqual(
      res.body,
      seedData.colors.list,
      "Color list is same with the seed data."
    );
  });
});

/*
 * Test the /colors/all:name route
 */
describe("/GET/all/:name colors", () => {
  it("it should GET siyah colored product Ids", async () => {
    const name = "siyah";

    let res = await chai.request(app).get(`/colors/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.colors.siyahProductIds.length);
    chai.expect(res.body).to.deep.equal(seedData.colors.siyahProductIds);
  });

  it("it should GET lacivert colored product Ids", async () => {
    const name = "lacivert";

    let res = await chai.request(app).get(`/colors/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.colors.lacivertProductIds.length);
    chai.expect(res.body).to.deep.equal(seedData.colors.lacivertProductIds);
  });

  it("it should GET kirmizi colored product Ids", async () => {
    const name = "kirmizi";

    let res = await chai.request(app).get(`/colors/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.colors.kirmiziProductIds.length);
    chai.expect(res.body).to.deep.equal(seedData.colors.kirmiziProductIds);
  });

  it("it should GET sari colored product Ids", async () => {
    const name = "sari";

    let res = await chai.request(app).get(`/colors/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.colors.sariProductIds.length);
    chai.expect(res.body).to.deep.equal(seedData.colors.sariProductIds);
  });

  it("it should GET mavi colored product Ids", async () => {
    const name = "mavi";

    let res = await chai.request(app).get(`/colors/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.colors.maviProductIds.length);
    chai.expect(res.body).to.deep.equal(seedData.colors.maviProductIds);
  });
});
