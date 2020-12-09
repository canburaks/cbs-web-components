import { newSpecPage } from '@stencil/core/testing';
import { CbsHero } from '../cbs-hero';

describe('cbs-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CbsHero],
      html: `<cbs-hero></cbs-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <cbs-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cbs-hero>
    `);
  });
});
