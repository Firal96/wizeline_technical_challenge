import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { TodayPage } from '../pages/today-page';
import { TaskContainer } from '../components/task-container';
import loginData from '../fixtures/login-data.json'

test.describe('ToDoList', () =>{
  test.beforeEach('Login to page', async ({page}) => {
    let loginPage = new LoginPage(page)
    await loginPage.navigate()
    await loginPage.inputUserName(loginData['basic-user'].username)
    await loginPage.inputPassword(loginData['basic-user'].password)
    await loginPage.clickOnLoginButton()
  })

  test('Create new Task', async ({ page }) => {
    let todayPage = new TodayPage(page)
    expect (await todayPage.getTitle()).toContain('Today')
    todayPage.clickOnTaskButton()
    let taskContainer = new TaskContainer(await todayPage.getTaskContainer())
    await taskContainer.inputTitle('Title')
    await taskContainer.inputContent('Content')
    await taskContainer.clickOnSaveButton()
  });
})



