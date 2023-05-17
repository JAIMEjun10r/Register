import { test, expect, chromium } from '@playwright/test';
import { Register } from '../pages/register';
import { Alerts } from '../pages/alerts';
import { faker } from '@faker-js/faker';
import data from './fixtures/register.json'


test.describe('Testando Register', async () => {
    test('Register', async ({ page }) => {
        const reg = new Register(page)
        const dados = data
        await page.goto('/Register.html')
        await reg.fullName(dados.fullName.firstName, dados.fullName.lastName)
        await reg.AddressEmailPhone(dados.addressEmailPhone.address, dados.addressEmailPhone.email, dados.addressEmailPhone.phone)
        await reg.radioAndCheckbox()
        await reg.languageSkillsSC()
        await reg.dateOfBirth(dados.dateOfBirth.ano, dados.dateOfBirth.mes, dados.dateOfBirth.dia)
        await reg.passwordConfirmPassword()

        
    });
test.describe('Testando alerts', async() => {
    test('Alert with OK', async ({ page }) => {
        const alert = new Alerts(page)
        await page.goto('/Alerts.html')
        await alert.btnAlertBox()
    });

    test('Alert with OK and Cancel', async({ page }) => {
        const alert = new Alerts(page)
        await page.goto('https://demoqa.com/alerts') 
        await alert.alertOK()
        
    });

    test.only('alert confirm box', async ({ page }) => {
        const alert = new Alerts(page)
        await page.goto('https://demoqa.com/alerts') 
        page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => {});
        });
        await page.locator('#confirmButton').click();
    });
    
});

});
