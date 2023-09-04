import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status} from "@cucumber/cucumber"
import {chromium, Page, Browser, BrowserContext} from "@playwright/test"

import {pageFixture} from "./pageFixture"

let browser: Browser
let page: Page
let context: BrowserContext

BeforeAll(async function() {
    browser = await chromium.launch({headless:false})
})

AfterAll(async function() {
    await browser.close()
})

Before(async function(){
    context = await browser.newContext()
    page = await context.newPage()
    pageFixture.page = page
})

After(async function({pickle, result}){
    console.log(result?.status);    
    if(result?.status == Status.FAILED){
        const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
        await this.attach(img, "image/png")
    }
    
    await pageFixture.page.close()
    await context.close()
})

AfterStep(async function () {
    
})

