import {LaunchOptions, chromium, firefox, webkit} from "@playwright/test"

const options: LaunchOptions = {
    headless: false,
}

/**
 * 
 * @returns This function defines the browser to start the test.
 * If the user start the test like `BROWSER=firefox npm test`, then the browser will be set to firefox.
 * The default browser is `chrome`
 */
export const invokeBrowser = () => {
    const browserType = process.env.BROWSER

    switch(browserType){
        case "chrome":
            return chromium.launch(options)

        case "firefox":
            return firefox.launch(options)

        case "webkit":
            return webkit.launch(options)

        default:
            return chromium.launch(options)
    }
}