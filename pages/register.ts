import { Page, expect } from '@playwright/test'

export class Register {
    readonly page:Page

    constructor(page: Page) {
        this.page = page
    }

    async fullName(nome: string, sobrenome: string) {
        await this.page.getByPlaceholder('First Name').fill(nome)
        await this.page.getByPlaceholder('Last Name').fill(sobrenome)
        
    }

    async AddressEmailPhone(endereco:string, email: string, telefone:string) {
        await this.page.locator('textarea').fill(endereco)
        await this.page.locator('input[type="email"]').fill(email);
        await this.page.locator('input[type="tel"]').fill(telefone);
    }

    async radioAndCheckbox() {
        await this.page.getByLabel('Male', { exact: true }).check();
        await this.page.locator('#checkbox1').check();
        //assert the checked state
        expect(await this.page.locator('#checkbox1').isChecked()).toBeTruthy()
    }

    async languageSkillsSC() {
        await this.page.locator('#Skills').selectOption('Adobe Photoshop');
        await this.page.locator('#country').selectOption('Australia')
             
    }

    async dateOfBirth(ano: string, mes:string, dia:string) {
        const passwordText = this.page.getByText('Confirm Password')
        await passwordText.scrollIntoViewIfNeeded()
        await this.page.locator('#yearbox').selectOption(ano)
        await this.page.locator('select[placeholder="Month"]').selectOption(mes)
        await this.page.locator('#daybox').selectOption(dia)  
       
    }

    async passwordConfirmPassword() {
        await this.page.locator('#firstpassword').fill('123')
        await this.page.locator('#secondpassword').fill('123')
        
    }
    
    
}


