import mongoose from "mongoose";
import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import app from "../../app.js";
// import Brand from "../../models/brands.model.js";
// import client from "../../libs/redis/index.js";
import seedData from "../response.js";

let should = chai.should();

chai.use(chaiHttp);

/*
 * Test the /brands/all route
 */
describe("/GET/all brands", () => {
  it("it should GET all of the brands", async () => {
    let res = await chai.request(app).get("/brands/all");

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai.expect(res.body.length).to.equal(seedData.brands.list.length);
    chai.expect(
      res.body.every((i) =>
        chai.expect(i).to.have.all.keys("_id", "name", "products")
      )
    );
    assert.deepEqual(
      res.body,
      seedData.brands.list,
      "Brand list is same with the seed data."
    );
  });
});

/*
 * Test the /brands/all:name route
 */
describe("/GET/all/:name brands", () => {
  it("it should GET Apple branded product Ids", async () => {
    const name = "apple";

    let res = await chai.request(app).get(`/brands/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.brands.appleProductIds.length);
    chai.expect(res.body).to.deep.equal(seedData.brands.appleProductIds);
  });

  it("it should GET Samsung branded product Ids", async () => {
    const name = "samsung";

    let res = await chai.request(app).get(`/brands/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.brands.samsungProductIds.length);
    chai
      .expect(res.body)
      .to.have.all.members(seedData.brands.samsungProductIds);
  });

  it("it should GET Nokia branded product Ids", async () => {
    const name = "nokia";

    let res = await chai.request(app).get(`/brands/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.brands.nokiaProductIds.length);
    chai.expect(res.body).to.have.all.members(seedData.brands.nokiaProductIds);
  });

  it("it should GET LG branded product Ids", async () => {
    const name = "lg";

    let res = await chai.request(app).get(`/brands/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai.expect(res.body.length).to.equal(seedData.brands.lgProductIds.length);
    chai.expect(res.body).to.have.all.members(seedData.brands.lgProductIds);
  });

  it("it should GET Huawei branded product Ids", async () => {
    const name = "huawei";

    let res = await chai.request(app).get(`/brands/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.brands.huaweiProductIds.length);
    chai.expect(res.body).to.have.all.members(seedData.brands.huaweiProductIds);
  });

  it("it should GET Xiaomi branded product Ids", async () => {
    const name = "xiaomi";

    let res = await chai.request(app).get(`/brands/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.brands.xiaomiProductIds.length);
    chai.expect(res.body).to.have.all.members(seedData.brands.xiaomiProductIds);
  });

  it("it should GET General Mobile branded product Ids", async () => {
    const name = "general-mobile";

    let res = await chai.request(app).get(`/brands/${name}`);

    chai.expect(res.status).to.equal(200);
    chai.expect(res.body).to.be.a("array");
    chai
      .expect(res.body.length)
      .to.equal(seedData.brands.generalMobileProductIds.length);
    chai
      .expect(res.body)
      .to.have.all.members(seedData.brands.generalMobileProductIds);
  });
});
