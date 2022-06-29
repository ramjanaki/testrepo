import { ClientFunction } from "testcafe";
import loginpage from '../Pages/LoginPage';
import modelpage from '../Pages/ModelPage';
import userpage from '../Pages/UserPage';
import itemspage from '../Pages/ItemsPage';

const dataSet = require('../data/data.json');

const URL = 'https://test.impactecs.com/Signin?ReturnUrl=%2F';
const getURL = ClientFunction(() => window.location.href);

/*  var randomMail = Math.floor(Math.random() * 10000);
    var userMail = 'mohit'+randomMail+'@impactecs';     */

fixture("Login Fixture")
    .page(URL)

test("Assert Login page Test", async (t) => {
    await t        
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(loginpage.titleHeader.exists).ok()
})

dataSet.forEach(data => {
test("Login Test", async (t) => {
    await t
        .expect(getURL()).contains('Signin')
        .typeText(loginpage.userName,data.username)
        .typeText(loginpage.password,data.password)
        .click(loginpage.signIn)
        .click(modelpage.QueryTests)
        .expect(userpage.navigationViewToggle.exists).ok()
        .click(userpage.userIcon)
        .click(userpage.signOut)
        .takeScreenshot()
    })
});
