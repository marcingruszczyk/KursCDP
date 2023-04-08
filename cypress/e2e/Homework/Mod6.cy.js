const url = "https://jsonplaceholder.typicode.com/posts/";
const url2 = "https://jsonplaceholder.typicode.com/posts/1/";

describe("Mod6 homework", () => {
  it("Test of POST method", function () {
    cy.request(url)
      .then((response) => {
        const body = JSON.stringify(response.body);
        expect(response.status).to.eq(200);
        cy.log(body);

        cy.request({
          method: "POST",
          url: url,
          body: JSON.stringify({
            title: "foo", 
            body: "bar",
            userID: 1,
          }),
          headers: { "Content-type": "application/json" },
        });
      })
      .then((response) => {
        const body = JSON.stringify(response.body);
        expect(response.status).to.eq(201);
        cy.log(body);
      });
  });

  it("Test of PUT method", function () {
    cy.request(url2)
      .then((response) => {
        const body = JSON.stringify(response.body);
        cy.log(body);

        cy.request({
          method: "PUT",
          url: url2,
          body: JSON.stringify({
            title: "PUT method",
            body: "PUT method is awesome",
          }),
          headers: { "Content-type": "application/json" },
        });
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('title', 'PUT method');
      });
  });
  it("Test of DELETE method", function () {
    cy.request(url2)
      .then((response) => {
        cy.request({
          method: "DELETE",
          url: url2,
        });
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.empty;
      });
  });
});
