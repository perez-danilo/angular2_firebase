import { PlanilhaAssetsPage } from './app.po';

describe('planilha-assets App', () => {
  let page: PlanilhaAssetsPage;

  beforeEach(() => {
    page = new PlanilhaAssetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
