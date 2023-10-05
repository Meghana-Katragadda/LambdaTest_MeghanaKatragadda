const {test,expect}=require('@playwright/test')
test('Scenario1',async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/")
await page.click("//a[text()='Drag & Drop Sliders']")
const slider=await page.locator("//input[@type='range' and @value='15']")
let temp =15
   while(temp!='95'){
           let expval =await page.locator("//output[@id='rangeSuccess']").getByText()
            await slider.press('ArrowRight')
        temp++
         }
         console.log(temp)
    await page.waitForTimeout(5000)

})

