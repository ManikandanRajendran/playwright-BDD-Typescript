import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status} from "@cucumber/cucumber"
import { Browser, BrowserContext} from "@playwright/test"
import {invokeBrowser} from "../helper/browser/browserManager"
import * as fs from "fs-extra"


import {pageFixture} from "./pageFixture"
import { getEnv } from "../helper/env/env"

let browser: Browser
let context: BrowserContext

BeforeAll(async function() {
    getEnv()
    browser = await invokeBrowser()
})

AfterAll(async function() {
    await browser.close()
})

Before(async function(){
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos"
        }
    })
    const page = await context.newPage()
    pageFixture.page = page
})

After(async function({pickle, result}){
    let videoPath: string
    let img: Buffer
    console.log(result?.status);    
    if(result?.status == Status.FAILED){
        img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
        videoPath = await pageFixture.page.video().path()
    }
    
    await pageFixture.page.close()
    await context.close()
    if(result?.status == Status.FAILED){
        await this.attach(img, "image/png")
        await this.attach(fs.readFileSync(videoPath),`video/webm`)
    }
})

AfterStep(async function () {
    
})

