import { LearnNg2FirebasePage } from './app.po';

describe('learn-ng2-firebase App', function() {
  let page: LearnNg2FirebasePage;

  beforeEach(() => {
    page = new LearnNg2FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
