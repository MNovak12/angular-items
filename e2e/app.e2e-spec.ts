import { BlacklistCasesPage } from './app.po';

describe('blacklist-cases App', () => {
  let page: BlacklistCasesPage;

  beforeEach(() => {
    page = new BlacklistCasesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
