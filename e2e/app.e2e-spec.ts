import { AngularWebsocketPage } from './app.po';

describe('angular-websocket App', () => {
  let page: AngularWebsocketPage;

  beforeEach(() => {
    page = new AngularWebsocketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
