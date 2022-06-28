import { Selector, t } from 'testcafe'

class CalculationsPage {
    
    constructor() {
    
    this.cal_culations = Selector('span').withExactText('Calculations')
    this.New_Folder = Selector('#impNewFolder')
    this.Folder_Name = Selector('div .dx-texteditor-container')
    this.Ok_button = Selector('span').withExactText('OK')
    }

    async Calculations() {
        await t.click(this.cal_culations)
    }
    async NewFolder() {
        await t.click(this.New_Folder)
    }
    async FolderName(name) {
        await t.typeText(this.Folder_Name, name, {paste: true, replace:true})
    }
    async Ok() {
        await t.click(this.Ok_button)
    }  
}

export default CalculationsPage

