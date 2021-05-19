const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const puppeteer = require('puppeteer')
var {After, Before} = require('@cucumber/cucumber');

Given('The browser is open', async function () {
    this.browser = await puppeteer.launch({})
    this.page = await this.browser.newPage()
});

When('I open {string} website', async function (string) {
    await this.page.goto(string)
});

Then('the title should be {string}', async function (string) {
    const title = await this.page.evaluate(() => {
        return document.querySelector('title').innerText
    })
    var res = title.split(" | ")
    assert.strictEqual(string, res[1])
    //await browser.close();
});

// BeforeAll(async function() {
//     this.browser = await puppeteer.launch({})
// })

After(async function() {
    await this.browser.close();
    //return Promise.resolve()
    
  });

  // a voir : garder meme instance de browser pour tous les scénarios