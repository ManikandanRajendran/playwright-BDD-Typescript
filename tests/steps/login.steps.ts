import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect} from "@playwright/test"

import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(20 * 1000 * 2);

Given("Navigate to the Bookcart homepage", async function () {
    await pageFixture.page.goto("https://bookcart.azurewebsites.net/")
});

When("user clicks on login link", async function () {
    await pageFixture.page.locator("//span[text()='Login']").click()
});

When(`user enters username as {string}`, async function(username: string){
    await pageFixture.page.locator(`input[formcontrolname="username"]`).type(username)
})

When(`user enters password as {string}`, async function(password: string){
    await pageFixture.page.locator(`input[formcontrolname="password"]`).type(password)
})

When(`user clicks login button`, async function(){
    await pageFixture.page.locator(`button[color="primary"]`).click()
})

Then("user should see the logged in page", async function () {
    const textElm = pageFixture.page.locator(`//*[contains(@class,"mat-focus-indicator mat-menu-trigger")]`)
    const text = await textElm.textContent()
    console.log(`My username : ${text}`);
    await expect(text?.includes("ortoni")).toEqual(true)
});

Then("user should see the error page", async function () {
    const textElm = pageFixture.page.locator(`.mat-error.ng-star-inserted`)
    const text = await textElm.textContent()
    await expect(text).toEqual("Username or Password is incorrect.")
});
