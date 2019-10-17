import { element, by, browser } from "protractor";

export class HomePage {

    nameField = element(by.model('yourName'));
    nameLabel = element(by.binding('yourName'));
    
    async open(){
        //await browser.waitForAngularEnabled(false);
        await browser.get('https://angularjs.org/');
    }

    async fillName(name:string){
        await this.nameField.sendKeys(name);
    }

    async getName(){
        let name = await this.nameLabel.getText();
        return await name;
    }
}