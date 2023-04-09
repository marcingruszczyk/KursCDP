import InputPage from "../../page-objects/inputPage";
import HomePage from "../../page-objects/homePage";
import CheckboxPage from "../../page-objects/checkboxPage";

describe("Test of simple website", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test inputs", () => {
    const homePage = new HomePage();
    homePage.clickInputsTab();

    const inputPage = new InputPage();
    inputPage.typeNumberIntoField();
    inputPage.typeLettersIntoField();
  });

  it("Test checkbox", () => {
    const homePage = new HomePage();
    homePage.clickCheckboxTab();

    const checkbox = new CheckboxPage();
    checkbox.checkFirstCheckbox();
    checkbox.uncheckLastCheckbox();
  });
});
