import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/Landing');
    });
    it('should say Landing', () => {
      expect(page.getParagraphText()).toContain('Landing');
    });
  });
});
