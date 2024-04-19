import { type Locator, type Page } from "@playwright/test";

export class TodayPage {
  readonly page: Page
  readonly title: Locator
  readonly taskButton: Locator
  readonly taskContainer: Locator

  constructor(page:Page){
    this.page = page
    this.title = this.page.getByRole('heading', { name: 'Today' })
    this.taskButton = this.page.getByTestId('section').getByRole('button', { name: 'Add task' })
    this.taskContainer = this.page.getByTestId('task_list_editor_wrapper')
  }

  async getTitle(){
    return await this.title.textContent()
  }

  async clickOnTaskButton(){
    await this.taskButton.click()
  }

  async getTaskContainer(){
    await this.taskContainer.waitFor({state: "visible"})
    return this.taskContainer
  }
}