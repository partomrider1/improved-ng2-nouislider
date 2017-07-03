import { ImprovedNg2NouisliderPage } from './app.po';

describe('improved-ng2-nouislider App', () => {
  let page: ImprovedNg2NouisliderPage;

  beforeEach(() => {
    page = new ImprovedNg2NouisliderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
