import { test, expect, Locator, Page } from '@playwright/test';
export class ContactUs{
    readonly ContactUsLnk: Locator;
    readonly Name: Locator;
    readonly Email: Locator;
    readonly Subject: Locator;
    readonly Message: Locator;
    readonly File: Locator;
    readonly SubmitBtn: Locator;
    readonly Home: Locator;
    
    constructor(page:Page) {
        this.ContactUsLnk = page.getByText('Contact us');
        this.Name = page.getByPlaceholder('Name');
        this.Email = page.locator('[data-qa="email"]');
        this.Subject = page.getByPlaceholder('Subject');
        this.Message = page.getByPlaceholder('Your Message Here');
        this.File = page.locator('input[name="upload_file"]');
        this.SubmitBtn = page.getByRole('button',{ name:'submit'});
        this.Home = page.locator('.fa.fa-angle-double-left')
    }


    async goToContactPage(){
        await expect(this.ContactUsLnk).toBeVisible();
        await this.ContactUsLnk.click();
    }

    async fillName() {
        await expect(this.Name).toBeVisible();
        await this.Name.fill('Aditya');
    }

    async fillEmail(){
        await expect(this.Email).toBeVisible();
        await this.Email.fill('Test@gmail.com');
    }

    async fillSubject(){
        await expect(this.Subject).toBeVisible();
        await this.Subject.fill('This is a test review');
    }

    async fillMessage(){
        await expect(this.Message).toBeVisible();
        await this.Message.fill('This is test review');
    }

    async UploadFile() {
        await expect(this.File).toBeVisible();
        await this.File.setInputFiles('uploads/sample.pdf');
    }

    async Submit(){
        await expect(this.SubmitBtn).toBeVisible();
        await this.SubmitBtn.click();
    }

    async goToHome(){
        await expect(this.Home).toBeVisible();
        await this.Home.click();
    }
}