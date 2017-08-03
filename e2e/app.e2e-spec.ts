import { Testapp2Page } from './app.po';

describe('testapp2 App', () => {
  let page: Testapp2Page;

  beforeEach(() => {
    page = new Testapp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
