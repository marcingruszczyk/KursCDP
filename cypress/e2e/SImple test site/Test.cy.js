import InputPage from "../../page-objects/inputPage";
import HomePage from "../../page-objects/homePage";
import CheckboxPage from "../../page-objects/checkboxPage";
import HoversPage from "../../page-objects/hoversPage";
import DropdownListPage from "../../page-objects/dropdownListPage";

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
  it("test dropdown list", function () {
    const homePage = new HomePage();
    homePage.clickDropdownListTab();

    const dropdownPage = new DropdownListPage();
    dropdownPage.chooseFirstOptionFromDropdownList();
  });
  it("test hover", function () {
    const homePage = new HomePage();
    homePage.clickHoversTab();

    const hoversPage = new HoversPage();
    hoversPage.hoverOverElement();
  });
});
