import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }

  getLabelName() {
    return element(by.cssContainingText('label', 'Name'));
  }

  getSubmitButton() {
    return element(by.cssContainingText('input', 'submit'));
  }
}
