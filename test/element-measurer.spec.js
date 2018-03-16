/// <reference path="./puppeteer.d.ts" />

const path = require('path');
const puppeteer = require('puppeteer');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;

/** @type {puppeteer.Browser} browser */
let browser;
/** @type {puppeteer.Page} page */
let page;

before(async function () {
  this.timeout(10000);
  /**
   * Chrome headless fails due to sandbox in Linux (Ubuntu)
   * https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-fails-due-to-sandbox-issues
   */
  browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.goto(`file:///${path.resolve(__dirname, 'index.html')}`);
});

after(function () {
  browser.close();
});

describe('Prepare Test', () => {
  it('should work.', async () => {
    const num = await page.evaluate(x => 5 * x, 5);
    expect(num).to.equal(25);
  });

  it('clientWidth: 800, clientHeight: 600', async () => {
    const [clientWidth, clientHeight] = await page.evaluate(() => {
      return [window.innerWidth, window.innerHeight];
    });
    expect(clientWidth).to.be.equal(800);
    expect(clientHeight).to.be.equal(600);
  });

  it('scrollWidth: 800, scrollHeight: 1200', async () => {
    const [scrollWidth, scrollHeight] = await page.evaluate(() => {
      return [
        document.documentElement.scrollWidth,
        document.documentElement.scrollHeight,
      ];
    });
    expect(scrollWidth).to.be.equal(800);
    expect(scrollHeight).to.be.equal(1200);
  });
});

describe('#ElementMeasurer', () => {
  describe('#constructor', () => {
    it('set target to document.', async () => {
      const res = await page.evaluate(() => {
        return new ElementMeasurer().isDocument;
      });
      expect(res).to.be.true;
    });

    it('set target to element.', async () => {
      const res = await page.evaluate(() => {
        return new ElementMeasurer('#target').isDocument;
      });
      expect(res).to.be.false;
    });

    it('set target to window.', async () => {
      const res = await page.evaluate(() => {
        return new ElementMeasurer(window).isDocument;
      });
      expect(res).to.be.true;
    });

    it('error occurs when give wrong argument type.', function () {
      expect(page.evaluate(() => new ElementMeasurer({}))).to.be.rejected;
    });
  });

  describe('clientWidth and clientHeight', () => {
    it('document clientWidth is equal to window.innerWidth', async () => {
      const [doc, win] = await page.evaluate(() => {
        const docSize = new ElementMeasurer();
        return [
          { width: docSize.clientWidth, height: docSize.clientHeight },
          { width: window.innerWidth, height: window.innerHeight },
        ];
      });
      expect(doc.width).to.equal(win.width);
      expect(doc.height).to.equal(win.height);
    });

    it('element clientHeight is equal Element.clientHeight.', async () => {
      const [size, elm] = await page.evaluate(() => {
        const size = new ElementMeasurer('#target');
        const elm = document.querySelector('#target');
        return [
          { width: size.clientWidth, height: size.clientHeight },
          { width: elm.clientWidth, height: elm.clientHeight },
        ];
      });
      expect(size.width).to.equal(elm.width);
      expect(size.height).to.equal(elm.height);
    });
  });

  describe('scrollWidth and scrollHeight', () => {
    it("scrollWidth is equal to Element.scrollHeight.", async () => {
      const [size, elm] = await page.evaluate(() => {
        const elmSize = new ElementMeasurer('#target');
        const elm = document.querySelector('#target');
        return [
          { width: elmSize.scrollWidth, height: elmSize.scrollHeight },
          { width: elm.scrollWidth, height: elm.scrollHeight },
        ];
      });
      expect(size.width).to.equal(elm.width);
      expect(size.height).to.equal(elm.height);
    });
  });

  describe('scrollTop and scrollLeft', () => {
    it("document's scrollTop is equal to window.pageYOffset.", async () => {
      const [doc, win] = await page.evaluate(() => {
        const docSize = new ElementMeasurer();
        return [
          { top: docSize.scrollTop, left: docSize.scrollLeft },
          { top: window.pageXOffset, left: window.pageYOffset },
        ];
      });
      expect(doc.top).to.equal(win.top);
      expect(doc.left).to.equal(win.left);
    });

    it("element's scrollLeft is equal to Element.scrollLeft.", async () => {
      const [size, elm] = await page.evaluate(() => {
        const elmSize = new ElementMeasurer('#target');
        const elm = document.querySelector('#target');
        return [
          { top: elmSize.scrollTop, left: elmSize.scrollLeft },
          { top: elm.scrollTop, left: elm.scrollLeft },
        ];
      });
      expect(size.top).to.equal(elm.top);
      expect(size.left).to.equal(elm.left);
    });

    it('can set scrollTop or scrollLeft.', async () => {
      const pageYOffset = await page.evaluate(() => {
        const docSize = new ElementMeasurer();
        docSize.scrollTop = 400;
        return window.pageYOffset;
      });
      expect(pageYOffset).to.be.equal(400);
    });
  });

  describe('maxScrollTop and maxScrollLeft', () => {
    it('maxScrollTop = scrollHeight - clientHeight', async () => {
      const [val1, val2] = await page.evaluate(() => {
        const docSize = new ElementMeasurer();
        return [
          { top: docSize.maxScrollTop, left: docSize.maxScrollLeft },
          {
            top: document.documentElement.scrollHeight - window.innerHeight,
            left: document.documentElement.scrollWidth - window.innerWidth,
          },
        ];
      });
      expect(val1.top).to.equal(val2.top);
      expect(val1.left).to.equal(val2.left);
    });
  });

  describe('#getOffset', () => {
    it('returns to object { top, left }.', async () => {
      const offset = await page.evaluate(() => {
        return new ElementMeasurer('#target').getOffset();
      });
      expect(offset.hasOwnProperty('top')).to.be.true;
      expect(offset.hasOwnProperty('left')).to.be.true;
    });
  });
});
