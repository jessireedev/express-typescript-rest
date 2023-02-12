import request from "supertest"
import app from "./app"

describe("GET /", () => {
  it("returns status code 200", async () => {
    const res = await request(app)
      .get("/")

    expect(res.statusCode).toEqual(200)
    expect(res.body.result).toEqual("ok")
  })
})