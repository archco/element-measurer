// tslint:disable-next-line:no-reference
/// <reference path="../element-measurer.d.ts" />

import puppeteer from 'puppeteer';
import { resolve } from 'path';

let browser: puppeteer.Browser;
let page: puppeteer.Page;

beforeAll(async () => {
  /**
   * Chrome headless fails due to sandbox in Linux (Ubuntu)
   */
  browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.goto(`file:///${resolve(__dirname, 'index.html')}`);
}, 10e3);

afterAll(async () => {
  await browser.close();
});

describe('Prepare Test', () => {
  it('should work.', async () => {
    const num = await page.evaluate(x => 5 * x, 5);
    expect(num).toEqual(25);
  });

  it('clientWidth: 800, clientHeight: 600', async () => {
    const [clientWidth, clientHeight] = await page.evaluate(() => {
      return [window.innerWidth, window.innerHeight];
    });
    expect(clientWidth).toEqual(800);
    expect(clientHeight).toEqual(600);
  });

  it('scrollWidth: 800, scrollHeight: 1200', async () => {
    const [scrollWidth, scrollHeight] = await page.evaluate(() => {
      return [
        document.documentElement.scrollWidth,
        document.documentElement.scrollHeight,
      ];
    });
    expect(scrollWidth).toEqual(800);
    expect(scrollHeight).toEqual(1200);
  });
});

describe('#ElementMeasurer', () => {
  describe('#constructor', () => {
    it('set target to document.', async () => {
      const res = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        return new ElementMeasurer().isDocument;
      });
      expect(res).toBeTruthy();
    });

    it('set target to element.', async () => {
      const res = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        return new ElementMeasurer('#target').isDocument;
      });
      expect(res).toBeFalsy();
    });

    it('set target to window.', async () => {
      const res = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        return new ElementMeasurer(window).isDocument;
      });
      expect(res).toBeTruthy();
    });

    // it('error occurs when give wrong argument type.', async () => {
    //   expect.assertions(1);
    //   await expect(page.evaluate(() => {
    //     return new window.ElementMeasurer.default({});
    //   })).rejects.toEqual({
    //     error: 'Target value is not correct type.',
    //   });
    // });
  });

  describe('clientWidth and clientHeight', () => {
    it('document clientWidth is equal to window.innerWidth', async () => {
      const [doc, win] = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        /** @type {ElementMeasurer} */
        const docSize = new ElementMeasurer();
        return [
          { width: docSize.clientWidth, height: docSize.clientHeight },
          { width: window.innerWidth, height: window.innerHeight },
        ];
      });
      expect(doc.width).toEqual(win.width);
      expect(doc.height).toEqual(win.height);
    });

    it('element clientHeight is equal Element.clientHeight.', async () => {
      const [size, elm] = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        /** @type {ElementMeasurer} */
        const s = new ElementMeasurer('#target');
        const e = document.querySelector('#target');
        return [
          { width: s.clientWidth, height: s.clientHeight },
          { width: e.clientWidth, height: e.clientHeight },
        ];
      });
      expect(size.width).toEqual(elm.width);
      expect(size.height).toEqual(elm.height);
    });
  });

  describe('scrollWidth and scrollHeight', () => {
    it('scrollWidth is equal to Element.scrollHeight.', async () => {
      const [size, elm] = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        /** @type {ElementMeasurer} */
        const s = new ElementMeasurer('#target');
        const e = document.querySelector('#target');
        return [
          { width: s.scrollWidth, height: s.scrollHeight },
          { width: e.scrollWidth, height: e.scrollHeight },
        ];
      });
      expect(size.width).toEqual(elm.width);
      expect(size.height).toEqual(elm.height);
    });
  });

  describe('scrollTop and scrollLeft', () => {
    it("document's scrollTop is equal to window.pageYOffset.", async () => {
      const [doc, win] = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        /** @type {ElementMeasurer} */
        const docSize = new ElementMeasurer();
        return [
          { top: docSize.scrollTop, left: docSize.scrollLeft },
          { top: window.pageXOffset, left: window.pageYOffset },
        ];
      });
      expect(doc.top).toEqual(win.top);
      expect(doc.left).toEqual(win.left);
    });

    it("element's scrollLeft is equal to Element.scrollLeft.", async () => {
      const [size, elm] = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        /** @type {ElementMeasurer} */
        const s = new ElementMeasurer('#target');
        const e = document.querySelector('#target');
        return [
          { top: s.scrollTop, left: s.scrollLeft },
          { top: e.scrollTop, left: e.scrollLeft },
        ];
      });
      expect(size.top).toEqual(elm.top);
      expect(size.left).toEqual(elm.left);
    });

    it('can set scrollTop or scrollLeft.', async () => {
      const pageYOffset = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        /** @type {ElementMeasurer} */
        const docSize = new ElementMeasurer();
        docSize.scrollTop = 400;
        return window.pageYOffset;
      });
      expect(pageYOffset).toEqual(400);
    });
  });

  describe('maxScrollTop and maxScrollLeft', () => {
    it('maxScrollTop = scrollHeight - clientHeight', async () => {
      const [val1, val2] = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        /** @type {ElementMeasurer} */
        const docSize = new ElementMeasurer();
        return [
          { top: docSize.maxScrollTop, left: docSize.maxScrollLeft },
          {
            top: document.documentElement.scrollHeight - window.innerHeight,
            left: document.documentElement.scrollWidth - window.innerWidth,
          },
        ];
      });
      expect(val1.top).toEqual(val2.top);
      expect(val1.left).toEqual(val2.left);
    });
  });

  describe('#getOffset', () => {
    it('returns to object { top, left }.', async () => {
      const offset = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        return new ElementMeasurer('#target').getOffset();
      });
      expect(offset).toHaveProperty('top');
      expect(offset).toHaveProperty('left');
    });
  });

  describe('#getRect', () => {
    it('returns a DOMRect object of target element', async () => {
      const instanceOfDomRect = await page.evaluate(() => {
        const ElementMeasurer = window.ElementMeasurer.default;
        const targetRect = new ElementMeasurer('#target').getRect();
        return targetRect instanceof DOMRect;
      });
      expect(instanceOfDomRect).toBeTruthy();
    });
  });
});
