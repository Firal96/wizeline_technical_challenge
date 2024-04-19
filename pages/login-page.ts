import { type Page, type Locator } from "@playwright/test";

export class LoginPage{
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly logInButton: Locator

  constructor(page:Page){
    this.page = page
    this.usernameInput = this.page.locator('#element-0')
    this.passwordInput = this.page.locator('#element-3')
    this.logInButton = this.page.getByRole('button', {name: "Log in"})
  }

  async navigate() {
    await this.page.goto('https://app.todoist.com/auth/login')    
  }

  async inputUserName(username:string){
    await this.usernameInput.type(username)
  }

  async inputPassword(password:string){
    await this.passwordInput.type(password)
  }

  async clickOnLoginButton(){
    await this.logInButton.click()
  }
}