import { WallaChatPage } from './app.po';

describe('walla-chat App', function() {
  let page: WallaChatPage;

  beforeEach(() => {
    page = new WallaChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
