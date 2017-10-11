import { DemolazyPage } from './app.po';

describe('demolazy App', () => {
  let page: DemolazyPage;

  beforeEach(() => {
    page = new DemolazyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
