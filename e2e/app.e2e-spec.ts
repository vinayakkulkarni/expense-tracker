import { ExpenseTrackerPage } from './app.po';

describe('expense-tracker App', () => {
  let page: ExpenseTrackerPage;

  beforeEach(() => {
    page = new ExpenseTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
