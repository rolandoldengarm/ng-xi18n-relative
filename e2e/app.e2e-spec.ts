import { NgXi18nRelativePage } from './app.po';

describe('ng-xi18n-relative App', function() {
  let page: NgXi18nRelativePage;

  beforeEach(() => {
    page = new NgXi18nRelativePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
