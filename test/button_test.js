/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { UmojaButton } from '../src/index.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('umoja-btn', () => {
  test('is defined', () => {
    const el = document.createElement('umoja-btn');
    assert.instanceOf(el, UmojaButton);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<umoja-btn title="Button"></umoja-btn>`);
    assert.shadowDom.equal(
      el,
      `
      <button type="button" class="umoja-c-btn umoja-c-btn--primary">Button</button>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<umoja-btn title="Umoja"></umoja-btn>`);
    assert.shadowDom.equal(
      el,
      `<button type="button" class="umoja-c-btn umoja-c-btn--primary">Umoja</button>`
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<umoja-btn title="Button"></umoja-btn>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `<button type="button" class="umoja-c-btn umoja-c-btn--primary">Button</button>`
    );
  });

  test('styling applied', async () => {
    const el = await fixture(html`<umoja-btn title="Button"></umoja-btn>`);
    await el.updateComplete;
    assert.equal(getComputedStyle(el).height, 'auto');
  });
});
