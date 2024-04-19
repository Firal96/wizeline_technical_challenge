import { Locator } from "@playwright/test";

export class TaskContainer{
  readonly container:Locator
  readonly taskTitle:Locator
  readonly taskContent:Locator
  readonly saveButton:Locator

  constructor(locator:Locator){
    this.container = locator
    this.taskTitle = this.container.getByLabel('Task name')
    this.taskContent = this.container.getByLabel('Description')
    this.saveButton = this.container.getByRole('button', {name:'Add task'})
  }

  async inputTitle(title:string){
    await this.taskTitle.fill(title)
  }

  async inputContent(content:string){
    await this.taskContent.fill(content)
  }

  async clickOnSaveButton(){
    await this.saveButton.click()
  }
}