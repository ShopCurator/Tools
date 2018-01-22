import Page from './page'
// import Properties from 'properties'

class LoginPage extends Page {

    /**
    * define elements
    */
    
    
    // get menuItem()   { return browser.element('//android.widget.TextView[@content-desc="Menu"]'); }
    get menuItem()   { return browser.element('//div[@class=\'container-fluid\']//ul[@id=\'mega-menu\']//a[@href]'); }
    // get usernameInput()   { return browser.element('//*[@name="username"]'); }
    // get passwordInput()   { return browser.element('//*[@name="password"]'); }
    // get rememberMe ()     { return browser.element('//*[@name="staySignedIn"]'); }
    // get loginButton()     { return browser.element('//*[@name="sign-in-btn"]'); }
    // get loginView()       { return browser.element('//*[@class="login-view-row"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('/')       //this will append `login` to the baseUrl to form complete URL
        console.log(browser.status());
        browser.pause(1000);
    }
    /**
     * your page specific methods
     */

    // waitForloginPageToLoad () {
    //   if(!this.loginView.isVisible()){
    //     this.loginView.waitForVisible(6000);
    //   }
    // }
    waitForloginPageToLoad () {
      if(!this.menuItem.isVisible()){
        this.menuItem.waitForVisible(6000);
      }
    }
    
    menuClick(){
      // this.waitForloginPageToLoad();
      this.menuItem.click();
    }

    login (username, password) {
      this.waitForloginPageToLoad();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.rememberMe.click();
      this.loginButton.click();
      browser.pause(2000);
    }
}


