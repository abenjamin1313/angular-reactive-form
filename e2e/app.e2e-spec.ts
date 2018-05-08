import { AppPage } from './app.po';

describe('ng-forms App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Angular Reactive Form');
  });

  it('should display name', () => {
    page.navigateTo();
    expect(page.getLabelName()).toEqual('name');
  });

  it('should submit form', () => {
    page.navigateTo();
    expect(page.getSubmitButton().click());
  });
});
