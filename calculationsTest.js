import { ClientFunction, Selector } from "testcafe";
import loginpage from '../Pages/LoginPage';
import modelpage from '../Pages/ModelPage';
import userpage from '../Pages/UserPage';
import itemspage from '../Pages/ItemsPage';

const URL = 'https://test.impactecs.com/Signin?ReturnUrl=%2F';
const getURL = ClientFunction(() => window.location.href);

var randomNumber = Math.floor(Math.random() * 10000);
var useFolderName = 'Test'+randomNumber;

fixture("Calculations Fixture")
    .page(URL);

test("Assert Login page Test", async (t) => {
    await t        
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(loginpage.titleHeader.exists).ok();
})

test("Calculations Test 1", async (t) => {
    await t
        .maximizeWindow()
        .expect(getURL()).contains('Signin')
        .typeText(loginpage.userName, 'mohit@impactecs')
        .typeText(loginpage.password, 'Nuwave@1234567890')
        .click(loginpage.signIn)
        .click(modelpage.QueryTests)
        .expect(userpage.navigationViewToggle.exists).ok()
        .click(itemspage.Calculations)
        .click(userpage.newFolder)
        .typeText(itemspage.folderNameInput, useFolderName)
        .click(itemspage.clickOk)
        //.expect(Selector('#itemName').exists).ok()
        .click(userpage.renameFolder)
        .typeText(itemspage.folderNameInput, useFolderName, {replace:true})
        .click(userpage.deleteFolder)
        .expect(Selector('#itemName').exists).notOk()
})
