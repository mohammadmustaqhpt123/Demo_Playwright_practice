// // const {chromium} = require('@playwright/test');
// // const test = async()=>{
// //     const browser = await chromium.connect("http://127.0.0.1:57046/");
  
// // //  const browser1 = await (  browser.browserType()).launch({channel:'chrome',headless:false });
// // //   const context = await browser1.newContext();
// // //   const page =  await context.newPage();
// // //   await page.goto('https://demoqa.com/')

// // // const browser = await chromium.connectOverCDP("http://127.0.0.1:57046/");
// // const defaultContext = browser.contexts()[0];
// // console.log(browser.contexts().length +' ----------------');
// // // const page = defaultContext.pages()[0]

// // // await page.goto('https://demoqa.com/')
// // // 
// // }

// // test();

// const { chromium } = require('@playwright/test');

// const test = async () => {
//     const browserServerUrl = "http://127.0.0.1:57046/";

//     // Connect to an existing browser session
//     const browser = await chromium.connect({ wsEndpoint: browserServerUrl });

//     // Get all contexts
//     const allContexts = browser.contexts();

//     if (allContexts.length === 0) {
//         console.log("No contexts found in the browser session.");
//         await browser.close(); // Close the browser connection
//         return;
//     }

//     // Use the first context (or any other available context)
//     const defaultContext = allContexts[0];

//     // Get the pages in the context
//     const pages = defaultContext.pages();

//     if (pages.length === 0) {
//         console.log("No pages found in the default context.");
//     } else {
//         // Interact with the first page in the default context
//         const page = pages[0];
//         await page.goto('https://demoqa.com/');
//     }

//     // Close the browser connection when done
//     await browser.close();
// };

// test();



const { chromium } = require('@playwright/test');
const fs = require('fs').promises;

const SESSION_FILE_PATH = 'session.json';

const test = async () => {
    let browser;
    let context;
    let page;

    try {
        const sessionData = await fs.readFile(SESSION_FILE_PATH, 'utf-8');
        const { browserWSEndpoint, pageURL } = JSON.parse(sessionData);

        // Connect to the existing browser session
        browser = await chromium.connect({ wsEndpoint: browserWSEndpoint });
        
        // Reuse the existing context
        context = browser.contexts()[0];
        
        // Reuse the existing page
        page = context.pages().find(p => p.url() === pageURL);
    } catch (error) {
        // If session data file doesn't exist or cannot be read, create a new browser session
        browser = await chromium.launch({headless:false});
        
        context = await browser.newContext();
        page = await context.newPage();
    }

    // If page doesn't exist or the URL is different, navigate to the default URL
    if (!page || page.url() !== 'https://demoqa.com') {
        await page.goto('https://demoqa.com');
    }

    // Save session data for future reuse
    const sessionData = {
        browserWSEndpoint: browser.wsEndpoint(),
        pageURL: page.url()
    };
    await fs.writeFile(SESSION_FILE_PATH, JSON.stringify(sessionData));

    // Continue with your script logic here

    // Close the browser connection when done
    await browser.close();
};

test();
