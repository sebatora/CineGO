const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const charModel = {
  id: "999",
  name: "test",
  image: "https://img.freepik.com/free-vector/cute-corgi-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4181.jpg",
  height: "10 - 20",
  weight: "5 - 10",
  life_span: "12-15",
  temperaments: ["Curious", "Active"]
}

describe("Route Test", () => {

  describe("GET /dogs/:id", () => {

    it("Response status code should be 200", async () => {
      const response = await request.get('/dogs/1')
      expect(response.statusCode).toBe(200)
    })

    it('Response should be an object with: "id", "name", "image", "height", "weight", "life_span" and "temperaments"', async () => {
      const response = await request.get('/dogs/1');
      for(const prop in charModel){
        expect(response.body).toHaveProperty(prop)
      }
    })

    it("Response status code should be 500 when an error occurs", async () => {
      const response = await request.get('/dogs/abcd');
      expect(response.statusCode).toBe(500)
    })
  })

  describe("POST /dogs", () => {

    it("Should add the new breed", async () => {
      const response = await request.post('/dogs').send(charModel);
      expect(response.body).toContainEqual(charModel);
    })

    it("Should add a new breed without deleting the old ones", async () => {
      charModel.id = "9999";
      charModel.name = "test2"
      const response = await request.post('/dogs').send(charModel);
      expect(response.body.length).toBe(2);
    })
  })
})