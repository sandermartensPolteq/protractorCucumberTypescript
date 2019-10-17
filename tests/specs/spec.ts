import { HomePage } from '../pages/homepage';
import { Given, When, Then, Before } from 'cucumber';
import { browser } from 'protractor';

let homePage: HomePage = new HomePage();

Given('on the homepage', async ()=>{
    await homePage.open();
});

When('the user enters his name', async ()=>{
    await homePage.fillName('sander');
});

Then('he should see his name', async ()=> {
    let name = await homePage.getName();
    console.log(name);
});
