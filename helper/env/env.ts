import * as dotenv from "dotenv"

/**
 *@returns This function is used to define the environment details (`BASEURL`).
 */ 

export const getEnv = () => {
    // dotenv.config({
    //     override: true,
    //     path: `helper/env/.env.${process.env.ENV}`
    // })
    const environment = process.env.ENV
    switch(environment){
        case "prod":
            return process.env.BASEURL = 'https://bookcart.azurewebsites.net/'
        
        case "staging":
            return process.env.BASEURL = 'https://bookcart.azurewebsites.net/'
        
        default:
            return process.env.BASEURL = 'https://bookcart.azurewebsites.net/'
    }
}