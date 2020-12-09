import { newE2EPage } from '@stencil/core/testing';

describe('cbs-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cbs-hero></cbs-hero>');

    const element = await page.find('cbs-hero');
    expect(element).toHaveClass('hydrated');
  });
});
