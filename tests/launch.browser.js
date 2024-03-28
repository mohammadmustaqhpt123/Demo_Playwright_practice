// import { chromium } from "@playwright/test";
const {chromium} = require('@playwright/test')

const browserServer =  chromium.launchServer({channel:'chrome', headless:false, });
 browserServer.then((browserServer)=>{
    console.log(browserServer.wsEndpoint());
})
