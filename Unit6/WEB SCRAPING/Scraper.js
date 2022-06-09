
const puppeteer = require('puppeteer');

async function get(){
 // Get the "viewport" of the page, as reported by the page.
  const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
await page.goto("https://www.google.com/search?q=react+developer+jobs&ei=4duYYpLRJYq94-EPqfK90AE&uact=5&oq=react+jobs&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggIABCABBDJAzIFCAAQkgMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBHOgUIABCRAjoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CAguEIAEELEDOgUILhCABDoLCAAQgAQQsQMQgwE6BAgAEEM6DgguEIAEELEDEMcBEKMCOgsILhDHARCvARCRAjoHCAAQyQMQQzoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOggILhCABBDUAjoLCC4QgAQQsQMQ1AI6DQgAELEDEIMBEMkDEEM6CAgAELEDEIMBOgoIABCxAxCDARANOgQIABANOgcIABDJAxANSgQIQRgASgQIRhgAUJseWIgzYOczaANwAngAgAGmAYgB5AqSAQQwLjExmAEAoAEBsAEAyAEIwAEB&sclient=gws-wiz&ibp=htl;jobs&sa=X&ved=2ahUKEwi546uOj4_4AhXh6zgGHQlPDQYQutcGKAF6BAgHEAY#fpstate=tldetail&htivrt=jobs&htidocid=LVgiNe15g0sAAAAAAAAAAA%3D%3D");
const dimensions = await page.evaluate(() => {
  const title = document.querySelectorAll(".BjJfJf");
     const titlearr = [...title];
     const res = titlearr.map(e=>e.innerText)
 
 
     const company = document.querySelectorAll(".vNEEBe");
     const companyarr = [...company];
     const res2 = companyarr.map(e=>e.innerText)
 
 
     const location = document.querySelectorAll(".Qk80Jf");
     const locationarr = [...location];
     const res3 = locationarr.map(e=>e.innerText)
 return {
    res,res2,res3
 };
});

await browser.close();
  return dimensions;
  await browser.close();
};
module.exports = {get};