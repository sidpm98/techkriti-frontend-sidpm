import { TechkritiPage } from './app.po';

describe('techkriti App', () => {
  let page: TechkritiPage;

  beforeEach(() => {
    page = new TechkritiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
