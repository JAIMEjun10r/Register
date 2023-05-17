import { Page, expect } from '@playwright/test'

export class Alerts {
    readonly page:Page

    constructor(page:Page) {
        this.page = page
    }

    async  btnAlertBox() {
        this.page.on('dialog', dialog => dialog.accept())
        this.page.getByRole('button', { name: 'click the button to display an alert box:' }).click
    }

    async alertOK() {
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
          await this.page.locator('#alertButton').click();
    }
}