import { test, expect, Locator, Page } from '@playwright/test';

export class LoginPage{
    readonly userInputBox: Locator;
    readonly page: Page;
    readonly passInputBox: Locator;
    readonly loginBtn: Locator;
    readonly signUpLink: Locator;
    
    

    constructor(page: Page) {
        this.page = page;
        this.signUpLink = page.locator('.fa.fa-lock');
        this.userInputBox = page.locator('[data-qa="login-email"]');
        this.passInputBox = page.locator('[data-qa="login-password"]');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
       
        }
        

    }
    
